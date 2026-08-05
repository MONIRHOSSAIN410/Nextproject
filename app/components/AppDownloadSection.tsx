"use client";

import { Smartphone, Apple } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            মোবাইল অ্যাপ
          </span>
          <h2 className="text-3xl font-black">যেকোনো সময়, যেকোনো স্থান থেকে শিখুন</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            আমাদের অ্যাপ ডাউনলোড করে অফলাইনে ভিডিও দেখুন, অনলাইন এক্সামে অংশ নিন এবং মুহূর্তেই আপনার অগ্রগতি ট্র্যাকিং করুন।
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-5 py-3 bg-white text-slate-900 font-bold rounded-xl flex items-center gap-3 hover:bg-slate-100 transition-colors text-xs">
              <Apple className="w-5 h-5 fill-current" /> App Store
            </button>
            <button className="px-5 py-3 bg-slate-800 text-white font-bold rounded-xl flex items-center gap-3 border border-slate-700 hover:bg-slate-700 transition-colors text-xs">
              <Smartphone className="w-5 h-5" /> Play Store
            </button>
          </div>
        </div>

        <div className="w-full md:w-auto flex justify-center">
          <div className="w-60 h-[300px] border-4 border-slate-700 rounded-[2.5rem] bg-slate-800 p-4 shadow-2xl relative flex flex-col justify-between">
            <div className="w-20 h-4 bg-slate-700 rounded-full mx-auto"></div>
            <div className="p-3 bg-emerald-600 rounded-2xl text-center text-xs font-bold">
              শিখবোসব মোবাইল অ্যাপ
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}