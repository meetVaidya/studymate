import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bqaiulnmwcljfbehfqob.supabase.co";
const supabaseAnonKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYWl1bG5td2NsamZiZWhmcW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzNjk4MzQsImV4cCI6MjA0Mzk0NTgzNH0.NLquGF1H_YM6DqWG-d7Jg7VvvDqEQahs03LO5tT0kKk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
