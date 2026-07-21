import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";
import { useRef } from "react";

const FACULTY = [
  {
    name: "অধ্যক্ষ মোঃ আব্দুল হক",
    role: "অধ্যক্ষ",
    subject: "প্রশাসন",
    image: "/images/faculty-1.jpg",
    rating: 5,
    quote: "শিক্ষা শুধু মন পূরণ করা নয়, জ্ঞানের আলো জ্বালানো।"
  },
  {
    name: "মোঃ তানভীর হোসেন",
    role: "বিভাগীয় প্রধান",
    subject: "গণিত",
    image: "/images/faculty-2.jpg",
    rating: 5,
    quote: "গণিত হলো বিশ্বব্রহ্মাণ্ডের ভাষা; আমার লক্ষ্য সবাইকে সেই ভাষায় পারদর্শী করা।"
  },
  {
    name: "তাসনিম আক্তার",
    role: "সিনিয়র শিক্ষক",
    subject: "বিজ্ঞান",
    image: "/images/faculty-3.jpg",
    rating: 5,
    quote: "প্রতিটি পরীক্ষা হলো আমাদের পৃথিবী বোঝার এক ধাপ।"
  },
  {
    name: "মোঃ রফিকুল ইসলাম",
    role: "সিনিয়র শিক্ষক",
    subject: "বাংলা",
    image: "/images/faculty-4.jpg",
    rating: 5,
    quote: "ভাষার শক্তি মন পরিবর্তন করতে পারে এবং ভবিষ্যৎ গড়তে পারে।"
  },
  {
    name: "সালমা সুলতানা",
    role: "শিক্ষক",
    subject: "আরবি ও দিনিয়াত",
    image: "/images/faculty-5.jpg",
    rating: 4,
    quote: "সৃজনশীলতার জন্য সাহস লাগে। আমি শিক্ষার্থীদের তাদের নিজস্ব কণ্ঠস্বর খুঁজে পেতে সাহায্য করি।"
  },
  {
    name: "মোঃ কামরুল হাসান",
    role: "শারীরিক শিক্ষক",
    subject: "খেলাধুলা",
    image: "/images/faculty-6.jpg",
    rating: 5,
    quote: "সুস্থ শরীর তীক্ষ্ণ মনকে পুষ্টি দেয়। মাঠে শৃঙ্খলা জীবনে শৃঙ্খলা।"
  }
];

export function FacultySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faculty" className="py-20 lg:py-28 bg-background border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <span className="text-accent font-bold tracking-wider uppercase mb-3 block text-sm">আমাদের শিক্ষকরা</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              শিক্ষকমণ্ডলীর সাথে পরিচিত হোন
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              আমাদের শিক্ষকরা শুধু পাঠদানকারী নন — তারা শিক্ষার্থীদের শিক্ষাগত ও ব্যক্তিগত বৃদ্ধিতে নিবেদিত মেন্টর।
            </p>
          </motion.div>
        </div>

        {/* Faculty Grid */}
        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {FACULTY.map((member, i) => (
            <motion.div key={i} variants={scaleUp} className="group relative overflow-hidden rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-500">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <Quote className="w-8 h-8 text-accent mb-3 opacity-50" />
                  <p className="text-white text-sm font-medium italic leading-relaxed mb-4">"{member.quote}"</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className={`w-4 h-4 ${idx < member.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-white/20 text-white/20'}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Bar */}
              <div className="p-6 bg-white absolute bottom-0 left-0 right-0 transform group-hover:translate-y-full transition-transform duration-300">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent uppercase tracking-wider">{member.role}</span>
                  <span className="text-sm text-muted-foreground">{member.subject}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}
          className="bg-primary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-[50%] -left-[10%] w-[50%] pt-[50%] rounded-full border-[40px] border-white" />
            <div className="absolute -bottom-[50%] -right-[10%] w-[50%] pt-[50%] rounded-full border-[40px] border-white" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">আমাদের শিক্ষক দলে যোগ দিন</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              আমরা সবসময় উৎসাহী শিক্ষকদের খুঁজি, যারা শিক্ষার্থীদের জীবনে পরিবর্তন আনতে চান। মিজান মডেল হাই স্কুলে ক্যারিয়ারের সুযোগ অন্বেষণ করুন।
            </p>
            <Button variant="secondary" size="lg" className="rounded-full px-8 font-semibold">
              চাকরির সুযোগ দেখুন
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
