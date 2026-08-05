"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { courses } from "@/app/data/edtechData";
import { Star, Users, ArrowRight } from "lucide-react";

export default function CourseSection() {
  return (
    <section id="courses" className="py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              আমাদের জনপ্রিয় কোর্সসমূহ
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base">
              আপনার লক্ষ্য পূরণে সহায়ক সেরা অনলাইন কোর্সসমূহ বেছে নিন।
            </p>
          </div>
          <button className="text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            সবগুলো কোর্স দেখুন <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-44 object-cover" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold bg-emerald-600 text-white rounded-lg shadow-md">
                    {course.badge}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-slate-900 dark:text-white line-clamp-2 hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    মেন্টর: {course.instructor}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>{course.enrolled}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between">
                <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">{course.price}</span>
                
                {/* Dynamic Route Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}