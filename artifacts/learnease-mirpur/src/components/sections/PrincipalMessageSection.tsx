import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function PrincipalMessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/images/faculty-1.jpg"
                alt="অধ্যক্ষ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </div>

          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">প্রধান শিক্ষকের বাণী</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              শিক্ষার আলোয় উজ্জ্বল ভবিষ্যৎ
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              “প্রিয় শিক্ষার্থী, অভিভাবক এবং সুধীজন, মিজান মডেল হাই স্কুলে আপনাদের স্বাগতম। আমাদের লক্ষ্য শুধু পাঠ্যবই শিক্ষা নয়, বরং নৈতিক মূল্যবোধ, দেশপ্রেম এবং সৃজনশীলতার বিকাশ। আমরা বিশ্বাস করি, প্রতিটি শিশুর মধ্যেই অসাধারণ সম্ভাবনা রয়েছে, এবং সঠিক পরিবেশে তা ফুটে ওঠে।”
            </p>
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-xl font-serif font-bold text-white">মোঃ আব্দুল হক</h4>
              <p className="text-white/70">অধ্যক্ষ, মিজান মডেল হাই স্কুল</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
