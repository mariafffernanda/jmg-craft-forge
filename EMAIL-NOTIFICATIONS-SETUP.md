# Email Notifications Setup Guide

This guide explains how to set up automatic email notifications when someone submits the contact form.

---

## Overview

When a customer submits the contact form, you'll receive an email at **jsuarezlig@gmail.com** with all the submission details. The lead is also automatically saved to the admin dashboard.

---

## 🎯 Current Status

✅ **Admin Dashboard**: Already receiving all submissions
✅ **Database Storage**: All form submissions are saved
⚠️ **Email Notifications**: Requires setup (2 options below)

---

## Option 1: Resend (Recommended - Easiest)

[Resend](https://resend.com) is a modern email API that's easy to set up and reliable.

### Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Get API Key

1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it "JMG Contact Form"
4. Copy the API key (starts with `re_...`)

### Step 3: Add Domain (Optional but Recommended)

1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `jmgcustommetal.com`)
3. Add the DNS records provided
4. Verify the domain

**Or use their test domain**: `onboarding.resend.dev` (for testing only)

### Step 4: Deploy Edge Function

1. Install Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Link your Supabase project:
   ```bash
   supabase link --project-ref YOUR_PROJECT_ID
   ```

3. Set the Resend API key:
   ```bash
   supabase secrets set RESEND_API_KEY=re_your_api_key_here
   ```

4. Deploy the Edge Function:
   ```bash
   supabase functions deploy send-lead-notification
   ```

5. Run the migration:
   ```bash
   supabase db push
   ```

### Step 5: Configure Supabase Settings

1. Go to your Supabase project dashboard
2. Navigate to **Project Settings** > **API**
3. Copy your **Project URL** and **Service Role Key**
4. Run these SQL commands in the SQL Editor:

   ```sql
   -- Set configuration for Edge Function calls
   ALTER DATABASE postgres SET app.settings.supabase_url = 'YOUR_SUPABASE_URL';
   ALTER DATABASE postgres SET app.settings.service_role_key = 'YOUR_SERVICE_ROLE_KEY';
   ```

### Step 6: Test

Submit a test form on your website and check:
- ✅ Email received at jsuarezlig@gmail.com
- ✅ Lead appears in admin dashboard
- ✅ No errors in Supabase logs

---

## Option 2: Zapier/Make.com (No Code Required)

This option uses Supabase Webhooks + automation platform (easier but may have costs).

### Using Zapier

1. **Create Zapier Account**
   - Go to [zapier.com](https://zapier.com)
   - Sign up for free account

2. **Create New Zap**
   - Trigger: **Supabase** → "New Row"
   - Select your Supabase project
   - Choose the **leads** table
   - Test the trigger

3. **Add Email Action**
   - Action: **Email by Zapier** → "Send Outbound Email"
   - To: `jsuarezlig@gmail.com`
   - Subject: `New Lead: {{name}} - {{service}}`
   - Body: Use the dynamic fields from the trigger

4. **Turn On Zap**

### Using Make.com (Similar Process)

1. Create account at [make.com](https://make.com)
2. Create scenario: Supabase Watch Records → Email
3. Configure the same way as Zapier

### Setup Supabase Webhook

1. Go to **Database** > **Webhooks** in Supabase
2. Click **Create a new hook**
3. Name: "New Lead Notification"
4. Table: `leads`
5. Events: Check **Insert**
6. Type: Select your automation platform
7. Add the webhook URL from Zapier/Make.com
8. Save

---

## Option 3: SendGrid (More Control)

### Step 1: Create SendGrid Account

1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up (free tier: 100 emails/day)
3. Verify your email

### Step 2: Get API Key

1. Go to **Settings** > **API Keys**
2. Create new API key
3. Name it "JMG Contact Form"
4. Choose **Full Access** or **Mail Send** only
5. Copy the API key (starts with `SG.`)

### Step 3: Modify Edge Function

Update `supabase/functions/send-lead-notification/index.ts`:

```typescript
// Change the fetch URL and headers
const sendgridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${SENDGRID_API_KEY}`,
  },
  body: JSON.stringify({
    personalizations: [{
      to: [{ email: NOTIFICATION_EMAIL }],
      subject: `New Lead: ${lead.name} - ${lead.service}`
    }],
    from: { email: "noreply@yourdomain.com", name: "JMG Contact Form" },
    content: [{
      type: "text/html",
      value: emailHtml
    }]
  }),
});
```

### Step 4: Deploy

Follow the same deployment steps as Option 1, but use:
```bash
supabase secrets set SENDGRID_API_KEY=SG.your_api_key_here
```

---

## Option 4: Gmail SMTP (Simple but Limited)

**Warning**: Gmail limits you to 500 emails/day and may flag as spam.

### Use Google App Password

1. Enable 2FA on your Google account
2. Go to **Security** > **App passwords**
3. Generate password for "Mail"
4. Use SMTP settings:
   - Host: `smtp.gmail.com`
   - Port: `587`
   - User: `jsuarezlig@gmail.com`
   - Pass: Your app password

This requires modifying the Edge Function to use SMTP instead of API.

---

## Troubleshooting

### Emails Not Sending

1. **Check Supabase Logs**
   ```bash
   supabase functions logs send-lead-notification
   ```

2. **Check Edge Function Status**
   - Go to Supabase Dashboard > Edge Functions
   - Verify function is deployed
   - Check for errors

3. **Check API Key**
   ```bash
   supabase secrets list
   ```

4. **Test Edge Function Manually**
   ```bash
   curl -X POST 'YOUR_SUPABASE_URL/functions/v1/send-lead-notification' \
     -H 'Authorization: Bearer YOUR_ANON_KEY' \
     -H 'Content-Type: application/json' \
     -d '{"name":"Test","email":"test@example.com","phone":"123","service":"Test","project_details":"Test","created_at":"2025-01-13T00:00:00Z"}'
   ```

### Check Database Trigger

```sql
-- Verify trigger exists
SELECT * FROM pg_trigger WHERE tgname = 'trigger_notify_new_lead';

-- View trigger definition
\df public.notify_new_lead
```

### Test Form Submission

1. Go to your Contact page
2. Fill out the form
3. Submit
4. Check:
   - Form shows success message
   - Lead appears in admin dashboard
   - Email received (if set up)

---

## Email Template Customization

The email template is in `supabase/functions/send-lead-notification/index.ts`.

To customize:
1. Edit the `emailHtml` variable
2. Redeploy: `supabase functions deploy send-lead-notification`

---

## Security Notes

✅ **API Keys**: Stored securely in Supabase secrets (never in code)
✅ **Database Trigger**: Runs server-side (cannot be bypassed)
✅ **Email Headers**: Includes anti-spam headers
✅ **Rate Limiting**: Supabase automatically rate limits Edge Functions

---

## Cost Comparison

| Service | Free Tier | Paid Plans |
|---------|-----------|------------|
| **Resend** | 3,000 emails/month | $20/month for 50k |
| **SendGrid** | 100 emails/day | $15/month for 50k |
| **Zapier** | 100 tasks/month | $20/month for 750 tasks |
| **Make.com** | 1,000 operations/month | $9/month for 10k ops |
| **Gmail SMTP** | 500 emails/day | Free |

**Recommendation**: Use Resend for the best balance of features, reliability, and cost.

---

## Quick Start (Resend - 5 Minutes)

```bash
# 1. Install Supabase CLI
npm install -g supabase

# 2. Login to Supabase
supabase login

# 3. Link project
supabase link --project-ref YOUR_PROJECT_ID

# 4. Set API key
supabase secrets set RESEND_API_KEY=re_your_key_here

# 5. Deploy function
supabase functions deploy send-lead-notification

# 6. Run migrations
supabase db push

# 7. Test!
```

---

## Support

If you need help setting this up:
- Email: jsuarezlig@gmail.com
- Check Supabase docs: [supabase.com/docs/guides/functions](https://supabase.com/docs/guides/functions)
- Check Resend docs: [resend.com/docs](https://resend.com/docs)

---

## Next Steps

After email notifications are working:

1. ✅ Set up email templates for different services
2. ✅ Add SMS notifications (Twilio)
3. ✅ Add Slack notifications
4. ✅ Set up auto-responder email to customer
5. ✅ Create email digest (daily summary)

---

**Last Updated**: January 13, 2025
