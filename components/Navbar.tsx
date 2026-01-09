"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutDashboard, MessageSquare, HardDrive, Coins, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          FLUSK
        </div>
        
        <div className="flex gap-8 items-center">
          <NavLink href="/dashboard" icon={<LayoutDashboard size={18}/>} label="Dashboard" />
          <NavLink href="/forum" icon={<MessageSquare size={18}/>} label="Forum" />
          <NavLink href="/hosting" icon={<HardDrive size={18}/>} label="Hosting" />
          <NavLink href="/wallet" icon={<Coins size={18}/>} label="Coins" />
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white/5 px-4 py-1 rounded-full border border-white/10 flex items-center gap-2">
            <Coins size={14} className="text-yellow-400" />
            <span className="font-mono text-sm">1,250</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm font-semibold transition-all">
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label }: { href: string, icon: any, label: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
