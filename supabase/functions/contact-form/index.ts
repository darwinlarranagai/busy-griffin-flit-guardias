import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from './cors.ts'

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { fullName, email, phone, company, serviceType, sector, message } = await req.json()

    // Create a Supabase client with the user's authorization
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Insert the new submission into the 'contact_submissions' table
    const { data, error } = await supabaseClient
      .from('contact_submissions')
      .insert([{ 
        full_name: fullName, 
        email, 
        phone, 
        company, 
        service_type: serviceType, 
        sector, 
        message 
      }])
      .select()
      .single()

    if (error) {
      throw error
    }

    return new Response(JSON.stringify({ submission: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})