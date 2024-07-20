import { createClient } from "@supabase/supabase-js";


const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_KEY;



export const supabase = createClient("https://sdcwhqnucehaxgbaaxmd.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkY3docW51Y2VoYXhnYmFheG1kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDQ1NzY2NSwiZXhwIjoyMDM2MDMzNjY1fQ.NwWNDrw-l2h3YmYDFe3ClRVDhgPFODjvqe1sOni82zA")
