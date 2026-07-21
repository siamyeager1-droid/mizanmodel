import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

const TESTIMONIALS = [
  {
    name: "ফারহানা আক্তার",
    role: "অভিভাবক",
    child: "৫ম শ্রেণী",
    text: "আমার মেয়ে এই স্কুলে খুব খুশি। শিক্ষকরা অত্যন্ত যত্নশীল এবং সবসময় অভিভাবকদের আপডেট রাখেন।",
    rating: 5,
  },
  {
    name: "মোঃ রফিকুল ইসলাম",
    role: "অভিভাবক",
    child: "৮ম শ্রেণী",
    text: "মিজান মডেল হাই স্কুলের পরিবেশ দারুণ। সন্তানের পড়াশোনার পাশাপাশি নৈতিক শিক্ষারও বিশেষ গুরুত্ব দেওয়া হয়।",
    rating: 5,
  },
  {
    name: "তানিয়া সুলতানা",
    role: "অভিভাবক",
    child: "৩য় শ্রেণী",
    text: "নতুন স্কুল হলেও ব্যবস্থাপনা অসাধারণ। ভর্তি প্রক্রিয়া সহজ এবং স্টাফরা অত্যন্ত সহযোগী।",
    rating: 4,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">প্যারেন্টস রিভিউ</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              অভিভাবকদের মন্তব্য
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i} variants={scaleUp}
              className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-4 h-4 ${idx < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'}`} />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">“{item.text}”</p>
              <div>
                <h4 className="font-serif font-bold text-primary">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.role} · {item.child}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
