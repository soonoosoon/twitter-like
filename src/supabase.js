import { createClient } from '@supabase/supabase-js'

// project url
const supabaseUrl = 'https://vfhzqfumuewiclufqapc.supabase.co'
// anon key
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmaHpxZnVtdWV3aWNsdWZxYXBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU3MDk3OTAsImV4cCI6MTk3MTI4NTc5MH0.XsHtqNDKyvJ5TfXUlFnfK4gkSjd883x7nC2nMtjFAoE'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
