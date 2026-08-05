"use client";

import { motion } from "framer-motion";
import { instructors } from "@/app/data/edtechData";

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">আমাদের অভিজ্ঞ মেন্টরবৃন্দ</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
          দেশের শীর্ষ বিশ্ববিদ্যালয় এবং আইটি ইন্ডাস্ট্রির সেরা শিক্ষকদের সাথে শিখুন।
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {instructors.map((ins, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center hover:border-emerald-500/50 transition-all"
          >
            <img src={ins.image} alt={ins.name} className="w-20 h-20 rounded-full mx-auto object-cover mb-4 ring-4 ring-emerald-100 dark:ring-emerald-950" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base">{ins.name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{ins.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}