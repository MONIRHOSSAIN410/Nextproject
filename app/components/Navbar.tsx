"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, BookOpenCheck, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-emerald-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-black text-2xl text-emerald-600 dark:text-emerald-400 tracking-tight">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-md">
            <BookOpenCheck className="w-6 h-6" />
          </div>
          <span>শিখবো<span className="text-slate-800 dark:text-white">সব</span></span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="কোর্স, বিষয় বা টিচার খুঁজুন..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-medium text-sm text-slate-700 dark:text-slate-200">
          <a href="#categories" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">ক্যাটাগরি</a>
          <a href="#courses" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">কোর্সসমূহ</a>
          <a href="#instructors" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">মেন্টরগণ</a>
          <a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">প্রশ্নোত্তর</a>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors">
            <User className="w-4 h-4" /> লগইন
          </button>
          <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all">
            রেজিস্ট্রেশন
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3"
          >
            <a href="#categories" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">ক্যাটাগরি</a>
            <a href="#courses" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">কোর্সসমূহ</a>
            <a href="#instructors" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">মেন্টরগণ</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-slate-700 dark:text-slate-200">প্রশ্নোত্তর</a>
            <div className="pt-2 flex flex-col gap-2">
              <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800">
                লগইন
              </button>
              <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600">
                রেজিস্ট্রেশন
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}