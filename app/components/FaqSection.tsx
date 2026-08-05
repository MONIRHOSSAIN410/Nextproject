"use client";

import { useState } from "react";
import { faqs } from "@/app/data/edtechData";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">সাধারণ কিছু প্রশ্ন ও উত্তর</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">আপনার যেকোনো জিজ্ঞাসার জবাব নিচে সহজেই পেয়ে যাবেন।</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180 text-emerald-600" : "text-slate-400"}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}