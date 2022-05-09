import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dvoiowbbngmpdkuzyhkp.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2b2lvd2JibmdtcGRrdXp5aGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIxMjI0NzUsImV4cCI6MTk2NzY5ODQ3NX0.JhnHmGQ9Jf5B2FHQlXOiTBN-QlVCrpAvmcuH7RVTjl0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
