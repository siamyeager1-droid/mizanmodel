import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer, slideInRight } from "@/lib/animations";

const PROGRAMS = [
  {
    id: "pre-primary",
    title: "Pre-Primary Program",
    age: "Ages 4-6",
    image: "/images/prog-pre.jpg",
    desc: "Our Pre-Primary program focuses on play-based learning, social development, and building foundational skills in a safe, colorful, and nurturing environment.",
    features: ["Play-based curriculum", "Focus on motor skills", "Introduction to phonics and numbers", "Art, music, and storytelling"]
  },
  {
    id: "primary",
    title: "Primary (Grades 1-5)",
    age: "Ages 6-11",
    image: "/images/prog-primary.jpg",
    desc: "The Primary years build strong academic foundations. We encourage curiosity and active participation, ensuring students grasp core concepts while developing critical thinking.",
    features: ["Core subjects: Math, Science, Languages", "Interactive classroom activities", "Regular assessments and feedback", "Values and ethics education"]
  },
  {
    id: "secondary",
    title: "Secondary (Grades 6-10)",
    age: "Ages 11-16",
    image: "/images/prog-secondary.jpg",
    desc: "A rigorous program designed to challenge students intellectually and prepare them for higher education. We focus on in-depth subject knowledge and character building.",
    features: ["Advanced curriculum integration", "Science labs and practicals", "Leadership opportunities", "Comprehensive mentoring"]
  },
  {
    id: "ssc",
    title: "SSC Preparation",
    age: "Grade 10+",
    image: "/images/prog-ssc.jpg",
    desc: "Our specialized SSC preparation track provides intensive coaching, mock exams, and personalized attention to ensure students achieve outstanding board results.",
    features: ["Expert faculty for board prep", "Extensive mock examinations", "Doubt-clearing sessions", "Stress management workshops"]
  },
  {
    id: "extracurricular",
    title: "Extracurricular Activities",
    age: "All Ages",
    image: "/images/prog-extra.jpg",
    desc: "Education goes beyond the classroom. We offer a wide array of activities to develop talents, promote physical health, and build teamwork.",
    features: ["Sports: Soccer, Cricket, Athletics", "Arts: Painting, Drama, Music", "Clubs: Robotics, Debate, Science", "Annual cultural events"]
  }
];

export default function Programs() {
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
              Programs & Courses
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive education tailored to every stage of a child's development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-20 md:space-y-32"
          >
            {PROGRAMS.map((prog, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={prog.id}
                  variants={fadeIn}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                      <img 
                        src={prog.image} 
                        alt={prog.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-lg">
                        {prog.age}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                      {prog.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {prog.desc}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {prog.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/admissions">
                      <Button className="rounded-full px-8 h-12 font-semibold shadow-md hover:shadow-lg transition-all">
                        Inquire About Admission
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
