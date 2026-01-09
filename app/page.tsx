"use client";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center pt-20">
      <Navbar />
      
      {/* Liquid Blobs */}
      <motion.div 
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="blob left-[-10%] top-[-10%]" 
      />
      <motion.div 
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="blob right-[-5%] bottom-[-5%] !bg-purple-600" 
      />

      <div className="text-center z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          HOSTING <br />
          <span className="text-blue-500">REDEFINED.</span>
        </motion.h1>
        
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10">
          Flusk is the next-generation PaaS. Deploy bots, host repositories, 
          and engage with a thriving community. All powered by the Flusk Coin economy.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all">
            Start Deploying
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
            View Forum
          </button>
        </div>
      </div>
    </main>
  );
}
