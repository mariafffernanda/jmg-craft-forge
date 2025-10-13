-- Migration: Add email notification system for new leads
-- This sets up automatic email notifications when a new lead is submitted

-- Create function to invoke Edge Function for email notifications
CREATE OR REPLACE FUNCTION public.notify_new_lead()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  request_id bigint;
BEGIN
  -- Call the Supabase Edge Function to send email
  -- Note: This requires the supabase_functions schema to be available
  SELECT
    net.http_post(
      url := format('%s/functions/v1/send-lead-notification', current_setting('app.settings.supabase_url', true)),
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', format('Bearer %s', current_setting('app.settings.service_role_key', true))
      ),
      body := jsonb_build_object(
        'name', NEW.name,
        'company', NEW.company,
        'email', NEW.email,
        'phone', NEW.phone,
        'service', NEW.service,
        'project_details', NEW.project_details,
        'created_at', NEW.created_at
      )
    ) INTO request_id;

  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error but don't fail the insert
  RAISE WARNING 'Failed to send email notification: %', SQLERRM;
  RETURN NEW;
END;
$$;

-- Create trigger to send email on new lead insertion
DROP TRIGGER IF EXISTS trigger_notify_new_lead ON public.leads;

CREATE TRIGGER trigger_notify_new_lead
AFTER INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.notify_new_lead();

-- Add comment to document the trigger
COMMENT ON TRIGGER trigger_notify_new_lead ON public.leads IS
'Automatically sends email notification to jsuarezlig@gmail.com when a new lead is submitted through the contact form';

-- Add comment to document the function
COMMENT ON FUNCTION public.notify_new_lead() IS
'Invokes Edge Function to send email notification for new lead submissions';
