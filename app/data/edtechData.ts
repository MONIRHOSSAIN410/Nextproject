export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  enrolled: string;
  students?: string; // Fixes "Property 'students' does not exist"
  price: string;
  badge: string;
  image: string;
  description: string;
  category?: string; // Fixes "Property 'category' does not exist"
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const categories: Category[] = [
  { id: "1", title: "ক্লাস ৬-১২", subtitle: "অনলাইন ব্যাচ", icon: "GraduationCap", color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400" },
  { id: "2", title: "স্কিলস", subtitle: "আইটি ও দক্ষতা", icon: "Code", color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400" },
  { id: "3", title: "ভর্তি পরীক্ষা", subtitle: "ভার্সিটি ও মেডিকেল", icon: "BookOpen", color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400" },
  { id: "4", title: "চাকরির প্রস্তুতি", subtitle: "বিসিএস ও ব্যাংক", icon: "Briefcase", color: "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400" },
  { id: "5", title: "স্পোকেন ইংলিশ", subtitle: "ইংরেজি শেখা", icon: "Languages", color: "bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400" },
  { id: "6", title: "ফ্রি নোটস", subtitle: "গাইড ও পিডিএফ", icon: "FileText", color: "bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-400" },
];

export const courses: Course[] = [
  {
    id: "hsc-2026-batch",
    title: "HSC 2026 অনলাইন ব্যাচ - বিজ্ঞান বিভাগ",
    instructor: "ড. আশরাফুল আলম ও টিম",
    rating: 4.9,
    enrolled: "১২,৪৫০+ শিক্ষার্থী",
    students: "১২,৪৫০+",
    price: "৳৩,৫০০",
    badge: "জনপ্রিয়",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    description: "সম্পূর্ণ HSC সিলেবাস কভার করার জন্য অভিজ্ঞ শিক্ষকদের লাইভ ক্লাস, নোট এবং উইকলি এক্সাম।",
    category: "1"
  },
  {
    id: "spoken-english-mastery",
    title: "ঘরে বসেই Spoken English & Grammar",
    instructor: "মুনাজেরুল ইসলাম",
    rating: 4.8,
    enrolled: "২৫,০০০+ শিক্ষার্থী",
    students: "২৫,০০০+",
    price: "৳১,২৫০",
    badge: "বেস্ট সেলার",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80",
    description: "সহজ ভাষায় দৈনন্দিন জীবনের জন্য ইংরেজি বলা এবং গ্রামার শেখার পারফেক্ট কোর্স।",
    category: "5"
  },
  {
    id: "web-development-bootcamp",
    title: "ফুলস্ট্যাক ওয়েব ডেভেলপমেন্ট উইথ রিয়্যাক্ট",
    instructor: "তানভীর আহমেদ",
    rating: 4.95,
    enrolled: "৮,২০০+ শিক্ষার্থী",
    students: "৮,২০০+",
    price: "৳৪,৫০০",
    badge: "নতুন",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80",
    description: "HTML, CSS, JavaScript, React, Next.js এবং Node.js শিখে প্রফেশনাল ওয়েব ডেভেলপার হোন।",
    category: "2"
  },
  {
    id: "varsity-admission-2026",
    title: "ভার্সিটি ক ক্যাটালগ অ্যাডমিশন প্রোগ্রাম",
    instructor: "ঢাকা বিশ্ববিদ্যালয় টিম",
    rating: 4.9,
    enrolled: "১৮,০০০+ শিক্ষার্থী",
    students: "১৮,০০০+",
    price: "৳৪,০০০",
    badge: "অ্যাডমিশন",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    description: "ঢাকা বিশ্ববিদ্যালয়সহ শীর্ষ পাবলিক বিশ্ববিদ্যালয়ের ক ইউনিটের সেরা প্রস্তুতি।",
    category: "3"
  }
];

export const stats = [
  { value: "৫০,০০০+", label: "সক্রিয় শিক্ষার্থী" },
  { value: "১০০+", label: "অভিজ্ঞ মেন্টর" },
  { value: "৯৫%", label: "সফলতার হার" },
  { value: "২৪/৭", label: "সাপোর্ট সিস্টেম" }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "কোর্সটিতে যোগ দিয়ে আমার লাইভ কোডিং দক্ষতা অনেক বৃদ্ধি পেয়েছে। মেন্টরদের সহায়তায় খুব দ্রুত রিয়্যাক্ট শিখতে পেরেছি।",
    author: "রাফসান জামি",
    role: "এইচএসসি শিক্ষার্থী",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    quote: "স্পোকেন ইংলিশের ক্লাসগুলো অসাধারণ ছিল! এখন অনেক আত্মবিশ্বাসের সাথে ইংরেজিতে কথা বলতে পারি।",
    author: "সাদিয়া সুলতানা",
    role: "বিশ্ববিদ্যালয় শিক্ষার্থী",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  }
];

export const instructors = [
  { name: "আশরাফুল ইসলাম", title: "পদার্থবিজ্ঞান মেন্টর", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
  { name: "নাসরিন সুলতানা", title: "ইংরেজি বিশেষজ্ঞ", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
  { name: "রাকিব হাসান", title: "গণিত ইনস্ট্রাক্টর", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
  { name: "ফারিহা পারভীন", title: "রসায়ন টিউটর", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80" },
];

export const faqs = [
  { question: "কীভাবে কোর্সে ভর্তি হব?", answer: "যেকোনো কোর্সের কার্ডে 'বিস্তারিত দেখুন' বাটনে ক্লিক করে বিকাশ, নগদ বা কার্ডের মাধ্যমে পেমেন্ট সম্পন্ন করতে পারবেন।" },
  { question: "ক্লাসগুলো কি লাইভ নাকি রেকর্ডেড?", answer: "আমাদের বেশিরভাগ একাডেমি কোর্স লাইভ ক্লাসে পরিচালিত হয় এবং পরবর্তীতে ক্লাসের রেকর্ডিং আপনার ড্যাশবোর্ডে জমা থাকবে।" },
  { question: "পেমেন্ট সম্পন্ন করার পর কীভাবে ক্লাস শুরু করব?", answer: "পেমেন্ট সফল হওয়ার সাথে সাথেই আপনার প্রোফাইল অ্যাক্টিভ হয়ে যাবে এবং মাই কোর্স সেকশনে ক্লাস দেখতে পাবেন।" },
];

export const services: Service[] = [
  {
    id: "1",
    title: "লাইভ ক্লাস (Live Classes)",
    description: "দেশের সেরা শিক্ষক ও মেন্টরদের সাথে সরাসরি ইন্টারেক্টিভ লাইভ ক্লাস।",
    icon: "Video"
  },
  {
    id: "2",
    title: "অনলাইন মডেল টেস্ট (Model Tests)",
    description: "অধ্যায়ভিত্তিক এবং পূর্ণাঙ্গ সিলেবাসের উপর অটোমেটেড এক্সাম ও রেজাল্ট।",
    icon: "CheckCircle"
  },
  {
    id: "3",
    title: "২৪/৭ ডাউট সলভ (24/7 Support)",
    description: "যেকোনো প্রশ্নের তাৎক্ষণিক সমাধান পেতে অভিজ্ঞ টিউটরদের সহায়তা।",
    icon: "HelpCircle"
  }
];