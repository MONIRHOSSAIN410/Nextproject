import { courses } from "@/app/data/edtechData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Star, Users, ArrowLeft, CheckCircle } from "lucide-react";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12 w-full">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> হোমপেজে ফিরে যান
        </Link>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-6">
            <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold">
              {course.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold">{course.title}</h1>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">{course.description}</p>

            <div className="flex items-center gap-6 text-sm font-medium">
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-current" /> {course.rating}
              </span>
              <span className="flex items-center gap-1 text-slate-500">
                <Users className="w-4 h-4" /> {course.enrolled}
              </span>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 space-y-3">
              <h3 className="font-bold text-lg">এই কোর্সে যা যা থাকছে:</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> ৫০+ ঘণ্টার ইন্টারেক্টিভ লাইভ ক্লাস</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> লেকচার শিট ও ক্লাস নোট পিডিএফ</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /> সাপ্তাহিক ও মাসিক কুইজ পরীক্ষা</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-xl space-y-6 sticky top-24">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-2xl" />
            <div className="flex justify-between items-center">
              <span className="text-3xl font-black text-emerald-600">{course.price}</span>
            </div>
            <button className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all text-sm">
              এখনই এনরোল করুন
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}