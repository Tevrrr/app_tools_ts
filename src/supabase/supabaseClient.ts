/** @format */
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(
	supabaseUrl ? supabaseUrl : 'https://desxdvbkqlhknaxdetuu.supabase.co',
	supabaseAnonKey
		? supabaseAnonKey
		: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlc3hkdmJrcWxoa25heGRldHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkwODg5NTYsImV4cCI6MTk2NDY2NDk1Nn0.t8ac_D9mwmDARWx-A6ZKQnagZIQLDrhU5KUsN7LrAHs'
);
