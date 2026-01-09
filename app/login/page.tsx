"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="blob left-0 top-0 opacity-20" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl w-full max-w-md z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to <span className="text-blue-500">Flusk</span></h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" placeholder="Email" 
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" placeholder="Password" 
            className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all">
            Login to Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  );
          }
