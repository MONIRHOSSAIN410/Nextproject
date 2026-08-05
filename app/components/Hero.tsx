"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, CheckCircle2, Play, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white dark:from-emerald-950/20 dark:via-slate-950 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
            <Sparkles className="w-4 h-4" />
            <span>বাংলাদেশের বিশ্বস্ত এডটেক প্ল্যাটফর্ম</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            আমরা শিখি, <br />
            <span className="text-emerald-600 dark:text-emerald-400">সফলতার জন্য</span> প্রস্তুত হই
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            স্কুল, কলেজ, বিশ্ববিদ্যালয় ভর্তি এবং যেকোনো স্কিল ডেভেলপমেন্টের জন্য দেশের সেরা টিচারদের সাথে অনলাইন লাইভ ক্লাস ও সঠিক দিকনির্দেশনা।
          </p>

          {/* Search Box in Hero */}
          <div className="flex items-center bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 max-w-xl">
            <Search className="w-5 h-5 text-slate-400 ml-3" />
            <input
              type="text"
              placeholder="আপনি কি শিখতে চান search করুন..."
              className="w-full px-3 py-2 text-sm bg-transparent border-none focus:outline-none text-slate-800 dark:text-slate-100"
            />
            <button className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors whitespace-nowrap">
              খুঁজুন
            </button>
          </div>

          {/* Quick Stats Badges */}
          <div className="pt-4 flex flex-wrap gap-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>১০০% লাইভ ক্লাস</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>অভিজ্ঞ মেন্টর</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>ফ্রি স্টাডি মেটেরিয়াল</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column Banner & Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80"
              alt="Students learning together"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <button className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg">
                <Play className="w-4 h-4 fill-current text-emerald-600" /> ডেমো ক্লাস দেখুন
              </button>
            </div>
          </div>

          {/* Floating Live Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 max-w-xs"
          >
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">সক্রিয় শিক্ষার্থী</p>
              <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">৫০,০০০+ শিক্ষার্থী</h4>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}