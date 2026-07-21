import { motion, useInView } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { fadeIn, staggerContainer, slideInRight } from "@/lib/animations";
import { useRef } from "react";

const TIMELINE = [
  { year: "২০২৫", title: "প্রতিষ্ঠা", desc: "মিজান মডেল হাই স্কুল প্রতিষ্ঠিত হয় মিরপুর-১, ঢাকা-১২১৬ এ, উজ্জ্বল ভবিষ্যৎ গড়ার স্বপ্ন নিয়ে।" },
  { year: "২০২৫", title: "আধুনিক ক্যাম্পাস", desc: "আমাদের ক্যাম্পাসে আধুনিক শ্রেণীকক্ষ, কম্পিউটার ল্যাব এবং খেলাধুলার সুবিধা রয়েছে।" },
  { year: "২০২৫", title: "শিক্ষা কার্যক্রম শুরু", desc: "প্রথম বর্ষ থেকেই আমরা প্রাথমিক থেকে মাধ্যমিক পর্যন্ত গুণগত মানসম্পন্ন শিক্ষা প্রদান করে আসছি।" },
  { year: "২০২৫", title: "ভর্তি চলছে", desc: "২০২৫ শিক্ষাবর্ষে ভর্তি চলছে। আমাদের সাথে যোগ দিন এবং আপনার সন্তানের সফল ভবিষ্যৎ গড়ুন।" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-28 bg-background border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <span className="text-accent font-bold tracking-wider uppercase mb-3 block text-sm">আমাদের গল্প</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              মিরপুরের হৃদয়ে, শিক্ষার আলোয়
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ২০২৫ সালে প্রতিষ্ঠিত মিজান মডেল হাই স্কুল একটি স্বপ্ন নিয়ে যাত্রা শুরু করেছে — মানসম্মত শিক্ষা এবং নৈতিক মূল্যবোধের ভিত্তিতে ভবিষ্যৎ প্রজন্মকে গড়ে তোলা।
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {/* Mission */}
          <motion.div variants={slideInRight} className="bg-white border border-border p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">আমাদের লক্ষ্য</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              শিক্ষার্থীদের জন্য গুণগত মানসম্পন্ন, সার্বিক শিক্ষা প্রদান করা যাতে তারা আত্মবিশ্বাসী, দয়ালু এবং দক্ষ মানুষ হিসেবে গড়ে ওঠে। আমরা যুক্তিপূর্ণ চিন্তা, নৈতিকতা এবং আজীবন শিক্ষার চাহিদা তৈরি করতে চাই।
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div variants={slideInRight} className="bg-white border border-border p-8 sm:p-10 rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">আমাদের দৃষ্টিভঙ্গি</h3>
            <p className="text-muted-foreground leading-relaxed relative z-10">
              মিরপুরের অন্যতম সেরা শিক্ষা প্রতিষ্ঠান হিসেবে আত্মপ্রকাশ করা, যেখানে শিক্ষার্থীরা শিক্ষাগত এবং চারিত্রিক উভয় দিক থেকে উৎকর্ষ লাভ করে সমাজে অবদান রাখতে পারে।
            </p>
          </motion.div>
        </motion.div>

        {/* History Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}
            className="text-2xl font-serif font-bold text-primary mb-12 text-center"
          >
            আমাদের যাত্রা
          </motion.h3>

          <div className="relative border-l-2 border-primary/20 pl-8 ml-4 sm:pl-0 sm:ml-0 sm:border-l-0">
            <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2" />

            <motion.div
              initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
              className="flex flex-col gap-12"
            >
              {TIMELINE.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div key={index} variants={fadeIn} className="relative flex sm:justify-between items-center sm:w-full">
                    {/* Circle marker */}
                    <div className="absolute -left-[41px] sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-white bg-primary shadow-sm z-10" />

                    {/* Content */}
                    <div className={`w-full sm:w-[calc(50%-3rem)] ${isEven ? 'sm:text-right' : 'sm:ml-auto'}`}>
                      <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-accent font-bold text-lg mb-1 block">{item.year}</span>
                        <h4 className="text-xl font-serif font-bold text-primary mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
