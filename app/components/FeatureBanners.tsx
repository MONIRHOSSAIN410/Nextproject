"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function FeatureBanners() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden shadow-xl"
      >
        <span className="text-xs uppercase tracking-wider font-extrabold bg-white/20 px-3 py-1 rounded-full">
          স্কুল ও কলেজ
        </span>
        <h3 className="text-2xl font-black mt-4 mb-2">লাইভ ইন্টার‍্যাক্টিভ ব্যাচ</h3>
        <p className="text-emerald-100 text-sm mb-6 max-w-md">
          দেশের সেরা শিক্ষকদের নিয়ে গঠিত লাইভ ক্লাস ও নিয়মিত পরীক্ষার মাধ্যমে পড়াশোনা এগিয়ে রাখো।
        </p>
        <button className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 font-bold text-xs flex items-center gap-2 hover:bg-emerald-50 transition-colors">
          ক্লাস বেছে নিন <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="p-8 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 text-white relative overflow-hidden shadow-xl"
      >
        <span className="text-xs uppercase tracking-wider font-extrabold bg-white/20 px-3 py-1 rounded-full">
          প্রফেশনাল স্কিলস
        </span>
        <h3 className="text-2xl font-black mt-4 mb-2">ক্যারিয়ার বুস্টআপ কোর্স</h3>
        <p className="text-amber-100 text-sm mb-6 max-w-md">
          ওয়েব ডেভেলপমেন্ট, গ্রাফিক্স ডিজাইন এবং স্পোকেন ইংলিশ শিখে নিজেকে গড়ে তুলুন আত্মবিশ্বাসী হিসেবে।
        </p>
        <button className="px-5 py-2.5 rounded-xl bg-white text-amber-900 font-bold text-xs flex items-center gap-2 hover:bg-amber-50 transition-colors">
          স্কিলস কোর্স দেখুন <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </section>
  );
}