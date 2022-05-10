import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zvibxvtukxixqobwfqnw.supabase.co';
const supabaseAnonKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2aWJ4dnR1a3hpeHFvYndmcW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyMTE0NDAsImV4cCI6MTk2Nzc4NzQ0MH0.B7Jyhxb2VCzBy1zrKh6LlUte3xd3lgxXjZ3CPfES0JI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


