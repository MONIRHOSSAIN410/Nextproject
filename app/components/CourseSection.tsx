"use client";

import { motion } from "framer-motion";
import { services, courses, stats, testimonials } from "@/app/data/edtechData";
import { Code2, GraduationCap, Briefcase, Star, Users, Smartphone, Apple } from "lucide-react";

const iconsMap = {
  Code2,
  GraduationCap,
  Briefcase,
};

export default function CardSection() {
  return (
    <div className="space-y-24 py-12">
      {/* Services / Categories Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Core Services</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Everything you need to accelerate your web development skills.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index: number) => {
            const Icon = iconsMap[service.icon as keyof typeof iconsMap] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Courses</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Handcrafted curricula designed for industry performance.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index: number) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-indigo-500/50 transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    {course.category}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 rounded-full">
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{course.title}</h3>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-white">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {course.rating}
                  </span>
                  <span>({course.students})</span>
                </div>
                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{course.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="bg-indigo-600 dark:bg-indigo-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-black mb-1">{stat.value}</div>
              <div className="text-indigo-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Loved by Developers</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">See what our community members have to say.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
            >
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{t.author}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* App Download Section */}
      <section id="app-download" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold mb-4">Take your learning on the go</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Download our iOS and Android app to access offline video lessons, practice code challenges, and track your progress anywhere.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
              <Apple className="w-5 h-5 fill-current" /> App Store
            </button>
            <button className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl flex items-center justify-center gap-3 border border-slate-700 hover:bg-slate-700 transition-colors">
              <Smartphone className="w-5 h-5" /> Google Play
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}