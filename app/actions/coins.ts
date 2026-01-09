"use server";
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function transferCoins(receiverUsername: string, amount: number) {
  // FIX: Await the cookies() call
  const cookieStore = await cookies(); 
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { 
          return cookieStore.get(name)?.value 
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };
  
  // ... rest of your logic
  return { success: true };
}
