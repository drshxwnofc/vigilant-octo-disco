"use server";
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function transferCoins(receiverUsername: string, amount: number) {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value },
      },
    }
  );

  // Get current logged in user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (amount <= 0) return { error: "Invalid amount" };

  // Logic for transfer... (Keep the rest of your previous logic here)
  // Use 'user.id' as the senderId
  return { success: true };
}
