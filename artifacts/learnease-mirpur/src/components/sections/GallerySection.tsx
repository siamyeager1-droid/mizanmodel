import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

const CATEGORIES = ["সব", "অ্যাকাডেমিক", "বিজ্ঞান", "খেলাধুলা", "অনুষ্ঠান"];

const GALLERY_IMAGES = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "শিল্প ক্লাস", category: "অ্যাকাডেমিক" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "শিক্ষক শিক্ষার্থীকে সাহায্য করছেন", category: "অ্যাকাডেমিক" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "স্কুল নাটক", category: "অনুষ্ঠান" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "গাছ লাগানো", category: "অনুষ্ঠান" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "কম্পিউটার ল্যাব", category: "বিজ্ঞান" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "জলখাবারের সময়", category: "অনুষ্ঠান" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "স্কুল কোরাস", category: "অনুষ্ঠান" },
  { id: 8, src: "/images/gallery-8.jpg", alt: "রোবোটিক্স ক্লাস", category: "বিজ্ঞান" },
  { id: 9, src: "/images/gallery-9.jpg", alt: "ক্রীড়া প্রতিযোগিতা", category: "খেলাধুলা" },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("সব");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = GALLERY_IMAGES.filter(
    img => activeFilter === "সব" || img.category === activeFilter
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-muted/30 border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <span className="text-accent font-bold tracking-wider uppercase mb-3 block text-sm">ক্যাম্পাস জীবন</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              ফটো গ্যালারি
            </h2>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === category
                  ? "bg-primary text-white"
                  : "bg-white text-muted-foreground border border-border hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-muted"
                onClick={() => setSelectedImage(img)}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/40">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <p className="text-white font-medium text-sm">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-white/10 rounded-full p-2 backdrop-blur-sm transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-5xl w-full max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                  <p className="text-white/70 text-sm">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
