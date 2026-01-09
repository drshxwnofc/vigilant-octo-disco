"use client";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import { transferCoins } from '@/app/actions/coins';
import { motion } from 'framer-motion';
import { Send, History, Gift } from 'lucide-react';

export default function Wallet() {
  const [targetUser, setTargetUser] = useState('');
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');

  const handleTransfer = async () => {
    setStatus('Processing...');
    // Replace 'current-user-id' with the actual ID from Supabase Auth later
    const result = await transferCoins('current-user-id', targetUser, amount);
    if (result.error) setStatus(`Error: ${result.error}`);
    else setStatus('Transfer Successful! 🚀');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Transfer Box */}
          <motion.div whileHover={{ scale: 1.01 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Send size={20} className="text-blue-400" /> Send Coins
            </h3>
            <div className="space-y-4">
              <input 
                placeholder="Receiver Username" 
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500"
                onChange={(e) => setTargetUser(e.target.value)}
              />
              <input 
                type="number" placeholder="Amount" 
                className="w-full bg-black/40 border border-white/10 p-4 rounded-xl outline-none focus:border-blue-500"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <button 
                onClick={handleTransfer}
                className="w-full bg-blue-600 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all"
              >
                Confirm Transfer
              </button>
              {status && <p className="text-center text-sm text-blue-400 mt-2 font-mono uppercase tracking-tighter">{status}</p>}
            </div>
          </motion.div>

          {/* Referral Stats */}
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Gift size={20} className="text-purple-400" /> Referral Program
            </h3>
            <div className="text-center py-4">
              <span className="text-gray-400 text-sm">Your Referral Code</span>
              <div className="text-3xl font-black text-white mt-1 tracking-widest">FLUSK-MAX-99</div>
              <button className="mt-4 text-xs bg-white/10 px-4 py-2 rounded-full hover:bg-white/20">Copy Link</button>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 flex justify-around">
              <div className="text-center">
                <div className="text-lg font-bold">12</div>
                <div className="text-[10px] text-gray-500 uppercase">Invites</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">1,200</div>
                <div className="text-[10px] text-gray-500 uppercase">Earned</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
              }
      
