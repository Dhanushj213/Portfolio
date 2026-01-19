
import { createClient } from '@supabase/supabase-js';

// Access environment variables securely
// USERS MUST CREATE A .env FILE IN THE ROOT DIRECTORY WITH THESE VALUES
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Please check your .env file or project configuration.');
}

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
