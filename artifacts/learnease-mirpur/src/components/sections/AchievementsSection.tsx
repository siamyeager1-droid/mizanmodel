import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "বিজ্ঞান মেলা চ্যাম্পিয়ন",
    year: "২০২৫",
    desc: "জেলা পর্যায়ে বিজ্ঞান মেলায় প্রথম স্থান অধিকার।",
  },
  {
    icon: Medal,
    title: "ক্রীড়া প্রতিযোগিতা",
    year: "২০২৫",
    desc: "বার্ষিক ক্রীড়া প্রতিযোগিতায় ফুটবল ও কাবাডিতে চ্যাম্পিয়ন।",
  },
  {
    icon: Star,
    title: "বৃত্তি প্রাপ্তি",
    year: "২০২৫",
    desc: "২০+ শিক্ষার্থী মেধা বৃত্তি পেয়েছে।",
  },
  {
    icon: Award,
    title: "শতভাগ পাস",
    year: "২০২৫",
    desc: "প্রথম এসএসসি পরীক্ষার্থীদের শতভাগ পাসের স্বাক্ষর।",
  },
];

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">গৌরবময় Moments</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              আমাদের অর্জন
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={i} variants={scaleUp}
              className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-accent mb-2 block">{item.year}</span>
              <h3 className="text-lg font-serif font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
