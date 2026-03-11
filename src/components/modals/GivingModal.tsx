"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, MousePointer2, Mail } from "lucide-react";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

export default function GivingModal() {
  const { isGivingModalOpen, closeGivingModal } = useModal();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText("Auburn SDA Church\nP.O. Box 756\nAuburn, GA 30011");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRegisterClick = () => {
    closeGivingModal();
    const rsvpSection = document.getElementById("rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isGivingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGivingModal}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-green p-8 text-white relative">
              <button
                onClick={closeGivingModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-3xl font-serif font-bold mb-2">Ways to Give</h2>
              <p className="text-white/80 font-light">Support the vision and legacy of Auburn SDA Church.</p>
            </div>

            <div className="p-8 md:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Option 1: Register Online */}
                <button
                  onClick={handleRegisterClick}
                  className="group relative flex flex-col items-center text-center p-8 rounded-2xl border-2 border-brand-gray/10 hover:border-brand-gold bg-white transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                    <MousePointer2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-green mb-2">Register & Pledge Online</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    Reserve your seat and make a faith promise commitment through our secure form.
                  </p>
                </button>

                {/* Option 2: Donate by Mail */}
                <div className="flex flex-col p-8 rounded-2xl border-2 border-brand-gray/10 bg-slate-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Mail className="w-16 h-16 text-brand-green" />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-brand-gray/10 flex items-center justify-center text-brand-gold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-brand-green text-xl">Donate by Mail</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">
                    Make checks payable to <span className="text-brand-green font-bold">Auburn SDA Church</span> and mail to:
                  </p>
                  
                  <div className="bg-white p-4 rounded-xl border border-brand-gray/10 shadow-sm mb-4 relative">
                    <div className="space-y-1 text-sm">
                      <p className="font-bold text-brand-green leading-tight">Auburn SDA Church</p>
                      <p className="text-slate-500 font-medium">P.O. Box 756</p>
                      <p className="text-slate-500 font-medium whitespace-nowrap">Auburn, GA 30011</p>
                    </div>
                  </div>

                  <button
                    onClick={copyAddress}
                    className="w-full flex items-center justify-center gap-2 bg-brand-light hover:bg-brand-gold/10 text-brand-gold px-4 py-3 rounded-xl transition-all duration-300 text-xs font-bold uppercase tracking-widest border border-brand-gold/20"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" /> Copied Address
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy Address
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Secure Donation Note */}
              <p className="text-center text-xs text-slate-400 font-medium max-w-md mx-auto">
                Thank you for your generosity. All donations are tax-deductible and support the mission and construction of our new facility.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
