// Safe Supabase client that gracefully falls back to known public env values
// NOTE: This avoids throwing at import time if environment injection is unavailable.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Prefer Vite envs; if unavailable (in some preview/deploy contexts), use the known public values.
const FALLBACK_URL = 'https://afjvcvnqyogqvfcbebkk.supabase.co';
const FALLBACK_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmanZjdm5xeW9ncXZmY2JlYmtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzMTM5NDgsImV4cCI6MjA3NTg4OTk0OH0.GUMwabQ3imgHV2Y1dmYmG7NwlvOkVVJq3LT7MIhipvQ';

const SUPABASE_URL = (import.meta.env?.VITE_SUPABASE_URL as string | undefined) ?? FALLBACK_URL;
const SUPABASE_PUBLISHABLE_KEY = (import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ?? FALLBACK_ANON_KEY;

// Validate URL format but do not throw until absolutely necessary
try {
  // Throws if invalid
  new URL(SUPABASE_URL);
} catch {
  console.error('Supabase URL is invalid. Check VITE_SUPABASE_URL.');
}

if ((import.meta as any)?.env && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY)) {
  // Log once when falling back
  console.warn('Supabase env not found at runtime. Using safe public fallbacks.');
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
});
