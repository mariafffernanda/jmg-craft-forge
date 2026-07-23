
-- 1. Lock down SECURITY DEFINER functions: revoke public execute; RLS/triggers still work
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

-- 2. Replace overly permissive insert policy on leads with validated check
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
CREATE POLICY "Anyone can submit a validated lead"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL
  AND length(btrim(name)) BETWEEN 1 AND 100
  AND email IS NOT NULL
  AND length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND phone IS NOT NULL
  AND length(phone) <= 20
  AND service IS NOT NULL
  AND length(service) <= 100
  AND project_details IS NOT NULL
  AND length(project_details) BETWEEN 1 AND 5000
  AND (company IS NULL OR length(company) <= 100)
);

-- 3. Explicit restrictive policy denying anonymous read of leads (defense-in-depth)
CREATE POLICY "Deny anonymous read of leads"
ON public.leads
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);
