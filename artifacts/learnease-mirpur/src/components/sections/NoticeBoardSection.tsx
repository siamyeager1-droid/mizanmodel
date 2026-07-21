import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Megaphone, Calendar, ChevronRight } from "lucide-react";
import { fadeIn, staggerContainer, slideInRight } from "@/lib/animations";

const NOTICES = [
  {
    id: 1,
    date: "২০ জুলাই, ২০২৫",
    title: "২০২৫ শিক্ষাবর্ষে ভর্তি চলছে",
    desc: "প্রথম থেকে দশম শ্রেণী পর্যন্ত ভর্তি চলছে। সীমিত আসন, আজই যোগাযোগ করুন।",
    tag: "ভর্তি",
  },
  {
    id: 2,
    date: "১৮ জুলাই, ২০২৫",
    title: "গ্রীষ্মকালীন ছুটির ঘোষণা",
    desc: "২৩-২৭ জুলাই পর্যন্ত স্কুল বন্ধ থাকবে। সকল শিক্ষার্থী ও অভিভাবককে অবগত করা হলো।",
    tag: "ছুটি",
  },
  {
    id: 3,
    date: "১৫ জুলাই, ২০২৫",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    desc: "আগামী ৫ আগস্ট বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হবে। অংশগ্রহণের নিয়মাবলী দেখুন।",
    tag: "অনুষ্ঠান",
  },
  {
    id: 4,
    date: "১০ জুলাই, ২০২৫",
    title: "পিতামাতা সমাবেশ",
    desc: "আগামী ২৮ জুলাই সকাল ১০টায় পিতামাতা সমাবেশ অনুষ্ঠিত হবে। সকল অভিভাবককে আমন্ত্রণ।",
    tag: "সমাবেশ",
  },
];

export function NoticeBoardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Header */}
          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">আপডেট</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              নোটিশ বোর্ড
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              স্কুলের সর্বশেষ ঘোষণা, ইভেন্ট এবং গুরুত্বপূর্ণ আপডেট এখানে পাবেন। নিয়মিত চোখ রাখুন।
            </p>
            <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              সব নোটিশ দেখুন <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right: Notices */}
          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-6"
          >
            {NOTICES.map((notice) => (
              <motion.div
                key={notice.id} variants={slideInRight}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {notice.tag}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {notice.date}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {notice.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {notice.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
