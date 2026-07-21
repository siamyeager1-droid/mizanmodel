import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Trophy, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, slideInRight, scaleUp } from "@/lib/animations";

const STATS = [
  { label: "Years of Excellence", value: "15+", icon: Trophy },
  { label: "Students Enrolled", value: "1,200+", icon: Users },
  { label: "Qualified Faculty", value: "85+", icon: BookOpen },
  { label: "Student Satisfaction", value: "98%", icon: Heart },
];

const PROGRAMS = [
  {
    title: "Pre-Primary",
    age: "Ages 4-6",
    desc: "A nurturing environment where young minds explore, play, and build foundational skills.",
    image: "/images/prog-pre.jpg",
  },
  {
    title: "Primary (1-5)",
    age: "Ages 6-11",
    desc: "Fostering curiosity and strong academic basics through interactive and engaging learning.",
    image: "/images/prog-primary.jpg",
  },
  {
    title: "Secondary (6-10)",
    age: "Ages 11-16",
    desc: "Comprehensive curriculum designed to develop critical thinking and character.",
    image: "/images/prog-secondary.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Students on campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={slideInRight} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/90 text-primary font-semibold text-sm tracking-wide uppercase">
              Admissions Open 2024-2025
            </motion.div>
            <motion.h1 variants={slideInRight} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Where Every Child <br />
              <span className="text-secondary">Learns and Grows</span>
            </motion.h1>
            <motion.p variants={slideInRight} className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              Welcome to LearnEase Mirpur — a trusted neighborhood school dedicated to providing quality education with warmth, care, and a commitment to excellence.
            </motion.p>
            <motion.div variants={slideInRight} className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base h-14 px-8 font-semibold shadow-lg">
                  Apply for Admission
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base h-14 px-8 font-semibold bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm">
                  Discover Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {STATS.map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Welcome / Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/about.jpg" 
                alt="Teacher helping students" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20 rounded-3xl" />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-secondary font-bold tracking-wider uppercase mb-3 text-sm">
                Welcome to LearnEase
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                A Foundation for a Brighter Future
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At LearnEase Mirpur, we believe that education is more than just textbooks and exams. It's about nurturing curiosity, building character, and providing a safe, supportive environment where every child feels valued.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our experienced educators work closely with families to ensure each student receives the attention they need to thrive academically and personally.
              </motion.p>
              
              <motion.ul variants={staggerContainer} className="flex flex-col gap-4 mb-10">
                {["Holistic educational approach", "Safe and caring environment", "Focus on moral values", "Modern facilities and resources"].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="font-medium text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div variants={fadeIn}>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full h-12 px-8 font-semibold group border-primary/20 hover:bg-primary hover:text-white">
                    Learn More About Us
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="text-secondary font-bold tracking-wider uppercase mb-3 text-sm">
                Our Curriculum
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Academic Programs
              </h2>
              <p className="text-lg text-muted-foreground">
                We offer a comprehensive educational journey from early childhood through secondary education, preparing students for success.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {PROGRAMS.map((prog, i) => (
              <motion.div 
                key={i} 
                variants={scaleUp}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-border"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300" />
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {prog.age}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {prog.desc}
                  </p>
                  <Link href="/programs" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors mt-auto">
                    Explore Program <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Link href="/programs">
              <Button size="lg" className="rounded-full h-14 px-8 font-semibold shadow-md">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          {/* Decorative circles */}
          <div className="absolute -top-[20%] -left-[10%] w-[50%] pt-[50%] rounded-full border-[40px] border-white" />
          <div className="absolute -bottom-[30%] -right-[10%] w-[60%] pt-[60%] rounded-full border-[60px] border-white" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Join the LearnEase Family
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              We are currently accepting applications for the upcoming academic year. Secure a spot for your child in our nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto rounded-full h-14 px-10 text-lg font-bold shadow-xl">
                  Start Application
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-14 px-10 text-lg font-bold bg-transparent text-white border-white/30 hover:bg-white hover:text-primary">
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
