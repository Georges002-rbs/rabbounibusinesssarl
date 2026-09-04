import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase URL ou Key manquante. Vérifiez vos variables d'environnement sur Render (.env.local)."
  );
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);