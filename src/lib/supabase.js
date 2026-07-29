import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xsmolmtpwvkjlrbfcszv.supabase.co";
const supabaseKey = "sb_publishable_IMOObi07zkHb60jct4tMaQ_A7ensqr6";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);