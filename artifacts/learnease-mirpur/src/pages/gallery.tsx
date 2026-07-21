import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

// 9 Images as requested
const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Art class", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Teacher helping student", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-3.jpg", alt: "School play", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Planting trees", className: "md:col-span-1 md:row-span-2" },
  { src: "/images/gallery-5.jpg", alt: "Computer lab", className: "md:col-span-2 md:row-span-1" },
  { src: "/images/gallery-6.jpg", alt: "Lunch time", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-7.jpg", alt: "School choir", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-8.jpg", alt: "Robotics class", className: "md:col-span-1 md:row-span-1" },
  { src: "/images/gallery-9.jpg", alt: "End of school day", className: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  return (
    <div className="w-full bg-background">
      
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Campus Life Gallery
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Glimpses of learning, joy, and community at LearnEase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6"
          >
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div 
                key={i} 
                variants={scaleUp} 
                className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${img.className}`}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply" />
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <p className="text-white font-medium text-lg">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
