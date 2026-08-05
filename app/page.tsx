import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import CategoriesSection from "@/app/components/CategoriesSection";
import CourseSection from "@/app/components/CourseSection";
import FeatureBanners from "@/app/components/FeatureBanners";
import InstructorsSection from "@/app/components/InstructorsSection";
import FaqSection from "@/app/components/FaqSection";
import AppDownloadSection from "@/app/components/AppDownloadSection";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoriesSection />
        <CourseSection />
        <FeatureBanners />
        <InstructorsSection />
        <FaqSection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}