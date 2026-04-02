'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, ArrowRight, Star } from 'lucide-react';

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSessionId(params.get('session_id'));
  }, []);

  return (
    <main className="min-h-screen bg-brand-green flex items-center justify-center p-4 relative overflow-hidden">
      {/* Premium Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)] opacity-50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] // Custom ease for a premium "pop"
        }}
        className="max-w-xl w-full bg-white border border-white/20 p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] text-center relative z-10"
      >
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
            className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner shadow-brand-green/20"
        >
          <CheckCircle2 size={48} className="text-brand-green" />
        </motion.div>

        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-brand-gold font-bold tracking-[0.4em] uppercase mb-4 inline-block text-[10px]"
        >
          Mission Accomplished
        </motion.span>

        <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-green mb-6 leading-tight">
          Impact Secured
        </h1>

        <p className="text-slate-600 mb-10 leading-relaxed text-sm md:text-base">
          Your generous contribution has been successfully processed. 
          Thank you for partnering with the Auburn SDA community to build a lasting legacy.
        </p>

        <div className="space-y-4">
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Link 
                    href="/"
                    className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-4 px-8 rounded-2xl w-full shadow-2xl shadow-brand-green/40 hover:bg-brand-green/90 transition-all uppercase tracking-[0.2em] text-xs"
                >
                    Back to Home
                    <ArrowRight size={14} />
                </Link>
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Link 
                    href="/#legacy-circles"
                    className="flex items-center justify-center gap-2 text-brand-green/50 hover:text-brand-green font-bold py-3 px-8 rounded-xl w-full transition-all uppercase tracking-widest text-[9px] underline underline-offset-8 decoration-1"
                >
                    View Fundraiser Progress
                </Link>
            </motion.div>
        </div>

        {sessionId && (
            <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="text-[8px] text-slate-300 font-mono uppercase tracking-widest">
                    Transaction ID • {sessionId.slice(0, 24)}...
                </p>
            </div>
        )}

        <div className="absolute top-10 right-10 text-brand-gold/10 flex gap-1 pointer-events-none">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
        </div>
      </motion.div>

      {/* Decorative Hearts/Sparkles */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-10 text-brand-gold hidden md:block"
      >
        <Heart size={40} fill="currentColor" className="opacity-10" />
      </motion.div>
    </main>
  );
}
