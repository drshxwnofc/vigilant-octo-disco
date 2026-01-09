import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';

export function useCoins(userId: string) {
  const [balance, setBalance] = useState<string | number>(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      const { data, error } = await supabase
        .from('profiles')
        .select('coins, role')
        .eq('id', userId)
        .single();

      if (data) {
        if (data.role === 'admin') {
          setBalance('∞'); // Visual representation
          setIsAdmin(true);
        } else {
          setBalance(data.coins);
          setIsAdmin(false);
        }
      }
    }
    fetchBalance();
  }, [userId]);

  return { balance, isAdmin };
}
