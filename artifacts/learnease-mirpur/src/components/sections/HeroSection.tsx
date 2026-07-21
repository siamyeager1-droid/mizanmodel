import { motion, useInView } from "framer-motion";
import { ArrowRight, BookOpen, Users, Trophy, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, slideInRight, scaleUp } from "@/lib/animations";
import { useRef } from "react";

const STATS = [
  { label: "প্রতিষ্ঠিত", value: "২০২৫", icon: Trophy },
  { label: "ছাত্রছাত্রী", value: "৫০০+", icon: Users },
  { label: "শিক্ষক", value: "২০+", icon: BookOpen },
  { label: "সন্তুষ্টি", value: "৯৮%", icon: Heart },
];

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[100dvh] flex items-center justify-center pt-28 sm:pt-32 lg:pt-40 pb-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="স্কুল ক্যাম্পাস"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.div variants={slideInRight} className="inline-flex flex-wrap items-center gap-2 mb-6 px-3 py-2 sm:px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide max-w-full">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
            ২০২৫ শিক্ষাবর্ষে ভর্তি চলছে
          </motion.div>

          <motion.h1 variants={slideInRight} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.2] mb-6">
            মিজান মডেল হাই স্কুলে<br />
            <span className="text-yellow-300">আপনাকে স্বাগতম</span>
          </motion.h1>

          <motion.p variants={slideInRight} className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed font-medium">
            জ্ঞানই আলো। মিরপুর-১, ঢাকা-১২১৬ এ অবস্থিত আমাদের বিদ্যালয় শিক্ষার আলোকে ছড়িয়ে দিতে প্রতিশ্রুতিবদ্ধ। আমরা গুণগত মানসম্পন্ন শিক্ষা ও নৈতিক মূল্যবোধের সাথে শিক্ষার্থীদের গড়ে তুলছি।
          </motion.p>

          <motion.div variants={slideInRight} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base h-14 px-8 font-semibold shadow-lg bg-yellow-300 text-primary hover:bg-yellow-400"
              onClick={() => scrollTo('admissions')}
            >
              ভর্তির আবেদন
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base h-14 px-8 font-semibold bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm"
              onClick={() => scrollTo('about')}
            >
              আমাদের সম্পর্কে জানুন
            </Button>
          </motion.div>

          <motion.div variants={slideInRight} className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 border-t border-white/20">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">{stat.value}</span>
                <span className="text-xs sm:text-sm font-medium text-white/70">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 cursor-pointer hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollTo('about')}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
