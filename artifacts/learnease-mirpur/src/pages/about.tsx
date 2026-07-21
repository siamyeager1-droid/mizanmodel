import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Eye, Heart, BookOpen, Users, Shield } from "lucide-react";
import { fadeIn, staggerContainer, slideInRight, scaleUp } from "@/lib/animations";

export default function About() {
  return (
    <div className="w-full bg-background">
      
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/about.jpg" 
            alt="Background pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              About LearnEase
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              A community dedicated to excellence, character, and lifelong learning in the heart of Mirpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleUp}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-square"
            >
              <img 
                src="/images/gallery-2.jpg" 
                alt="Teacher and student" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-secondary font-bold tracking-wider uppercase mb-3 text-sm">
                Our Story
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Rooted in Mirpur, Reaching for the Stars
              </motion.h2>
              <motion.div variants={fadeIn} className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  LearnEase Mirpur was founded over 15 years ago with a simple yet profound vision: to create a school that feels like a second home. We saw the need for an educational institution in Mirpur that balanced rigorous academics with genuine warmth and care.
                </p>
                <p>
                  What started as a small primary school has blossomed into a comprehensive educational community, serving students from pre-primary through SSC. Our journey has been guided by a steadfast belief that every child possesses unique potential waiting to be unlocked.
                </p>
                <p>
                  Today, LearnEase stands as a pillar in the local community—a place where generations of families have entrusted their children's futures, knowing they will be nurtured, challenged, and loved.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10 md:gap-16"
          >
            {/* Mission */}
            <motion.div variants={slideInRight} className="bg-primary/5 p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-lg">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                To provide a high-quality, holistic education that empowers students to become confident, compassionate, and capable individuals. We strive to foster critical thinking, moral integrity, and a lifelong love for learning in a safe and inclusive environment.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div variants={slideInRight} className="bg-secondary/10 p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-8 shadow-lg">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                To be the premier educational institution in our community, recognized for academic excellence and character development, producing future leaders who will make meaningful contributions to society.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do, from our curriculum design to our daily interactions with students.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: BookOpen, title: "Excellence", desc: "Pursuing the highest standards in academics and personal growth." },
              { icon: Heart, title: "Compassion", desc: "Fostering empathy, kindness, and respect for all individuals." },
              { icon: Shield, title: "Integrity", desc: "Acting with honesty and strong moral principles at all times." },
              { icon: Users, title: "Community", desc: "Building strong partnerships between school, family, and society." },
            ].map((value, i) => (
              <motion.div key={i} variants={scaleUp} className="bg-white border border-border p-8 rounded-3xl text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
