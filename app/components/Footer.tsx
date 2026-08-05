import { BookOpenCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
        <div className="col-span-2 md:col-span-1 space-y-3">
          <div className="flex items-center gap-2 font-black text-xl text-white">
            <div className="p-1.5 bg-emerald-600 rounded-lg text-white">
              <BookOpenCheck className="w-5 h-5" />
            </div>
            <span>শিখবোসব</span>
          </div>
          <p className="text-xs text-slate-400">
            বাংলাদেশের এক নম্বর অনলাইন শিক্ষা প্ল্যাটফর্ম।
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">কোর্সসমূহ</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-emerald-400">এইচএসসি ব্যাচ</a></li>
            <li><a href="#" className="hover:text-emerald-400">এসএসসি ব্যাচ</a></li>
            <li><a href="#" className="hover:text-emerald-400">স্পোকেন ইংলিশ</a></li>
            <li><a href="#" className="hover:text-emerald-400">ওয়েব ডেভেলপমেন্ট</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">কোম্পানি</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-emerald-400">আমাদের সম্পর্কে</a></li>
            <li><a href="#" className="hover:text-emerald-400">কেরিয়ার</a></li>
            <li><a href="#" className="hover:text-emerald-400">ব্লগ</a></li>
            <li><a href="#" className="hover:text-emerald-400">প্রাইভেসি পলিসি</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">যোগাযোগ</h4>
          <p className="text-xs leading-relaxed">
            ইমেইল: support@shikhbosob.com<br />
            হটলাইন: ১৬৭১১ (সকাল ৯টা - রাত ১০টা)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} শিখবোসব এডটেক লিমিটেড। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}