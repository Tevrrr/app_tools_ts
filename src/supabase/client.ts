/** @format */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = typeof process.env.REACT_APP_SUPABASE_URL ==='string' ? process.env.REACT_APP_SUPABASE_URL : '';
const supabaseAnonKey =
	typeof process.env.REACT_APP_SUPABASE_ANON_KEY === 'string'
		? process.env.REACT_APP_SUPABASE_ANON_KEY
		: ''; ;

export const supabase =  createClient(supabaseUrl, supabaseAnonKey);
