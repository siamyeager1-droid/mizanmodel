import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { fadeIn, staggerContainer, slideInRight } from "@/lib/animations";

const FAQS = [
  {
    q: "ভর্তির জন্য কি কি কাগজপত্র লাগে?",
    a: "জন্ম নিবন্ধনের কপি, ২ কপি পাসপোর্ট সাইজ ছবি, পূর্ববর্তী স্কুলের রিপোর্ট এবং ট্রান্সফার সার্টিফিকেট (প্রযোজ্য ক্ষেত্রে)।",
  },
  {
    q: "কোন কোন শ্রেণীতে ভর্তি হওয়া যায়?",
    a: "আমরা প্রথম থেকে দশম শ্রেণী পর্যন্ত ভর্তি নিয়ে থাকি।",
  },
  {
    q: "স্কুলের সময়সূচি কি?",
    a: "রবিবার থেকে বৃহস্পতিবার, সকাল ৯টা থেকে বিকাল ৪টা। শুক্রবার ও শনিবার সাপ্তাহিক ছুটি।",
  },
  {
    q: "কোচিং ক্লাস আছে কি?",
    a: "হ্যাঁ, বিজ্ঞান, গণিত এবং ইংরেজি বিষয়ে অতিরিক্ত কোচিং ক্লাসের ব্যবস্থা রয়েছে।",
  },
  {
    q: "যোগাযোগের নম্বর কি?",
    a: "০১৬৮১৫৪৭৭৮০৫ এবং ০১৭৯০৩৬৩০৮২৭ — এই নম্বরে কল বা WhatsApp করতে পারেন।",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-muted/30 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <HelpCircle className="w-6 h-6" />
              </div>
              <span className="text-sm font-bold text-accent uppercase tracking-wider">জিজ্ঞাসা</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              আপনার মনে যে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন। নিচে কিছু সাধারণ প্রশ্নের উত্তর দেওয়া হলো।
            </p>
          </motion.div>

          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
            className="space-y-4"
          >
            {FAQS.map((faq, i) => (
              <motion.div
                key={i} variants={slideInRight}
                className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-serif font-bold text-primary pr-4">{faq.q}</span>
                  {openIndex === i ? <Minus className="w-5 h-5 text-accent shrink-0" /> : <Plus className="w-5 h-5 text-accent shrink-0" />}
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
