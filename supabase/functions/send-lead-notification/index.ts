// Supabase Edge Function to send email notifications for new leads
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFICATION_EMAIL = "jsuarezlig@gmail.com";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(100).optional().nullable(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20),
  service: z.string().trim().max(100),
  project_details: z.string().trim().min(1).max(5000),
  created_at: z.string().max(64),
});

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const parsed = LeadSchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }
    const lead = parsed.data;
    const safeEmailHref = lead.email.replace(/[^a-zA-Z0-9@._+-]/g, "");
    const safePhoneHref = lead.phone.replace(/[^0-9+]/g, "");

    // Format the email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #000; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #777; }
            .highlight { background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔔 New Lead Submission</h1>
              <p>JMG Custom Metal Shop</p>
            </div>
            <div class="content">
              <div class="highlight">
                <strong>⚡ Action Required:</strong> A new customer has requested a quote!
              </div>

              <div class="field">
                <span class="label">Name:</span><br>
                <span class="value">${escapeHtml(lead.name)}</span>
              </div>

              ${lead.company ? `
              <div class="field">
                <span class="label">Company:</span><br>
                <span class="value">${escapeHtml(lead.company)}</span>
              </div>
              ` : ''}

              <div class="field">
                <span class="label">Email:</span><br>
                <span class="value"><a href="mailto:${safeEmailHref}">${escapeHtml(lead.email)}</a></span>
              </div>

              <div class="field">
                <span class="label">Phone:</span><br>
                <span class="value"><a href="tel:${safePhoneHref}">${escapeHtml(lead.phone)}</a></span>
              </div>

              <div class="field">
                <span class="label">Service Requested:</span><br>
                <span class="value">${escapeHtml(lead.service)}</span>
              </div>

              <div class="field">
                <span class="label">Project Details:</span><br>
                <span class="value">${escapeHtml(lead.project_details).replace(/\n/g, '<br>')}</span>
              </div>

              <div class="field">
                <span class="label">Submitted:</span><br>
                <span class="value">${new Date(lead.created_at).toLocaleString('en-US', {
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}</span>
              </div>
            </div>
            <div class="footer">
              <p>This email was automatically generated when a customer submitted the contact form on your website.</p>
              <p><strong>JMG Custom Metal Shop</strong><br>
              7318 N.W. 79th Ter., Miami, FL 33166<br>
              (305) 218-5311</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const emailText = `
New Lead Submission - JMG Custom Metal Shop

Name: ${lead.name}
${lead.company ? `Company: ${lead.company}\n` : ''}
Email: ${lead.email}
Phone: ${lead.phone}
Service: ${lead.service}
Project Details: ${lead.project_details}
Submitted: ${new Date(lead.created_at).toLocaleString()}

---
This email was automatically generated from your website contact form.
JMG Custom Metal Shop | 7318 N.W. 79th Ter., Miami, FL 33166 | (305) 218-5311
    `;

    // Send email using Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "JMG Contact Form <noreply@yourdomain.com>",
        to: [NOTIFICATION_EMAIL],
        subject: `New Lead: ${lead.name} - ${lead.service}`,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await resendResponse.json();

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
