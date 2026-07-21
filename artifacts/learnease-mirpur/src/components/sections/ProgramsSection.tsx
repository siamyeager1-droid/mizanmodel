import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, Palette, Code, Music, Trophy, Compass, Atom, Globe } from "lucide-react";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";
import { useRef } from "react";

const PROGRAMS = [
  {
    id: "primary",
    title: "প্রাথমিক বিভাগ",
    age: "১ম-৫ম শ্রেণী",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    iconColor: "text-blue-500 bg-blue-100",
    icon: BookOpen,
    desc: "গণিত, বিজ্ঞান এবং ভাষার মৌলিক দক্ষতা গড়ে তোলা হয় আনন্দময় ও ইন্টারঅ্যাক্টিভ পরিবেশে।"
  },
  {
    id: "middle",
    title: "নিম্ন মাধ্যমিক",
    age: "৬ষ্ঠ-৮ম শ্রেণী",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    iconColor: "text-teal-500 bg-teal-100",
    icon: Compass,
    desc: "সমালোচনামূলক চিন্তা এবং স্বাধীনতা বৃদ্ধির মাধ্যমে শিক্ষার্থীদের ভবিষ্যৎ প্রস্তুতি।"
  },
  {
    id: "science",
    title: "বিজ্ঞান বিভাগ",
    age: "৯ম-১০ম শ্রেণী",
    color: "bg-purple-50 text-purple-600 border-purple-100",
    iconColor: "text-purple-500 bg-purple-100",
    icon: Atom,
    desc: "আধুনিক ল্যাব এবং ব্যবহারিক পরীক্ষার মাধ্যমে এসএসসি পরীক্ষার জন্য কঠোর প্রস্তুতি।"
  },
  {
    id: "humanities",
    title: "মানবিক বিভাগ",
    age: "৯ম-১০ম শ্রেণী",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    iconColor: "text-orange-500 bg-orange-100",
    icon: Globe,
    desc: "ইতিহাস, ভূগোল এবং বাংলা সাহিত্যের মাধ্যমে সমাজ ও সংস্কৃতি বোঝার সুযোগ।"
  },
  {
    id: "it",
    title: "কম্পিউটার ও তথ্যপ্রযুক্তি",
    age: "৩য়-১০ম শ্রেণী",
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    iconColor: "text-cyan-500 bg-cyan-100",
    icon: Code,
    desc: "আধুনিক প্রযুক্তির যুগে ডিজিটাল দক্ষতা, কোডিং যুক্তি এবং সফটওয়্যার দক্ষতা।"
  },
  {
    id: "arts",
    title: "নৃত্য ও সংস্কৃতি",
    age: "সব শ্রেণী",
    color: "bg-pink-50 text-pink-600 border-pink-100",
    iconColor: "text-pink-500 bg-pink-100",
    icon: Palette,
    desc: "অঙ্কন, আবৃত্তি, নৃত্য এবং সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে সৃজনশীলতা বিকাশ।"
  },
  {
    id: "music",
    title: "সঙ্গীত ও নাটক",
    age: "সব শ্রেণী",
    color: "bg-yellow-50 text-yellow-700 border-yellow-100",
    iconColor: "text-yellow-600 bg-yellow-100",
    icon: Music,
    desc: "সঙ্গীত, বাদ্যযন্ত্র এবং নাটকের মাধ্যমে আত্মবিশ্বাস ও অভিব্যক্তি বাড়ানো হয়।"
  },
  {
    id: "sports",
    title: "খেলাধুলা ও ক্রীড়া",
    age: "সব শ্রেণী",
    color: "bg-green-50 text-green-600 border-green-100",
    iconColor: "text-green-500 bg-green-100",
    icon: Trophy,
    desc: "শারীরিক স্বাস্থ্য, দলীয় কাজ এবং শৃঙ্খলার জন্য কাঠামোবদ্ধ ক্রীড়া কার্যক্রম।"
  }
];

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="py-20 lg:py-28 bg-muted/30 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <span className="text-accent font-bold tracking-wider uppercase mb-3 block text-sm">শিক্ষা কার্যক্রম</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              আমাদের প্রোগ্রামসমূহ
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              প্রাথমিক থেকে মাধ্যমিক পর্যন্ত এবং সহ-শিক্ষা কার্যক্রমের মাধ্যমে আমরা সর্বাঙ্গীণ ব্যক্তিত্ব গড়ে তুলি।
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROGRAMS.map((prog, i) => (
            <motion.div
              key={prog.id}
              variants={scaleUp}
              custom={i}
              className="bg-white rounded-3xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${prog.iconColor}`}>
                  <prog.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${prog.color}`}>
                  {prog.age}
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {prog.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {prog.desc}
              </p>

              <div className="mt-auto pt-4 border-t border-border flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                বিস্তারিত <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
