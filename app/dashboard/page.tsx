"use client";
import { motion } from 'framer-motion';
import { Zap, HardDrive, Share2, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto pt-32 px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Welcome back, <span className="text-blue-400">Chief</span></h1>
          <p className="text-gray-400">Manage your Flusk infrastructure and assets.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Coin Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10"><Zap size={80} /></div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">Available Balance</h3>
            <div className="text-5xl font-black text-yellow-400">∞</div>
            <p className="mt-4 text-xs text-blue-300 font-mono tracking-widest">ADMIN STATUS: ACTIVE</p>
          </motion.div>

          {/* Storage Card */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-gray-400 text-sm font-medium mb-4">Storage Usage</h3>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '65%' }} 
                className="bg-blue-500 h-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>6.5 GB Used</span>
              <span>10 GB Total</span>
            </div>
          </div>

          {/* Referral Card */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-gray-400 text-sm font-medium mb-2">Invite & Earn</h3>
            <div className="bg-black/40 p-3 rounded-lg border border-white/5 flex justify-between items-center mb-4">
              <code className="text-blue-300">FLUSK-9921</code>
              <button className="text-xs bg-white/10 px-2 py-1 rounded">Copy</button>
            </div>
            <p className="text-xs text-gray-500">Get 100 coins for every friend who signs up.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <ActionButton icon={<Shield size={20}/>} label="Security Audit" />
          <ActionButton icon={<Share2 size={20}/>} label="Send Coins" />
          <ActionButton icon={<HardDrive size={20}/>} label="New Instance" />
          <button className="bg-blue-600 rounded-xl font-bold py-4 hover:bg-blue-500 transition-all">
            Deploy Now
          </button>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl py-4 hover:bg-white/10 transition-all text-sm font-semibold">
      {icon} {label}
    </button>
  );
                }
