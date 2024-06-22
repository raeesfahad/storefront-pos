import { createClient } from "@supabase/supabase-js";


const supabase_url = import.meta.env.VITE_DB_URL
const supabase_key = import.meta.env.VITE_DB_KEY

const supabase_auth_url = import.meta.env.VITE_SUPABASE_AUTH_URL
const supabase_auth_key = import.meta.env.VITE_SUPABASE_AUTH_KEY

export const supabase_auth = createClient(supabase_auth_url, supabase_auth_key)

const supabase = createClient(supabase_url, supabase_key)


export default supabase