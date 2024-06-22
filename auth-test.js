import { createClient } from "@supabase/supabase-js";


const supabase_url = "https://kvxtsdjdxdrxrvyzjspv.supabase.co"
const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2eHRzZGpkeGRyeHJ2eXpqc3B2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTAxNzIsImV4cCI6MjAzMTY4NjE3Mn0.d-1LgIhukAi0tmrM4v-JP0Re4L6gtj1QgQAcs7EPzm4"
 

const supabase = createClient(supabase_url, supabase_key, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})


const adminAuthClient = supabase.auth.admin

adminAuthClient.createUser({
  email: 'superadmin@storefront.com',
  password: 'superadmin@storefront',
  role: 'super-admin',
  app_metadata: { role: 'super-admin' }
})
