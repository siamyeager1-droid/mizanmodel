import { motion } from "framer-motion";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

const FACULTY = [
  {
    name: "Dr. Farhana Ahmed",
    role: "Principal",
    image: "/images/faculty-1.jpg",
    bio: "Over 20 years of experience in educational leadership, dedicated to creating nurturing learning environments."
  },
  {
    name: "Mr. Tariq Rahman",
    role: "Head of Mathematics",
    image: "/images/faculty-2.jpg",
    bio: "Passionate about making math accessible and engaging through real-world applications."
  },
  {
    name: "Ms. Nusrat Jahan",
    role: "Senior Science Teacher",
    image: "/images/faculty-3.jpg",
    bio: "Inspires students through hands-on experiments and inquiry-based learning."
  },
  {
    name: "Mr. Abdul Karim",
    role: "Literature & Language Arts",
    image: "/images/faculty-4.jpg",
    bio: "Fosters a love for reading and critical thinking through classic and modern literature."
  },
  {
    name: "Ms. Sadia Islam",
    role: "Art & Design Instructor",
    image: "/images/faculty-5.jpg",
    bio: "Encourages creative expression and helps students discover their artistic voices."
  },
  {
    name: "Mr. Hasan Mahmud",
    role: "Physical Education Director",
    image: "/images/faculty-6.jpg",
    bio: "Promotes physical well-being, teamwork, and sportsmanship among all age groups."
  },
  {
    name: "Ms. Rina Begum",
    role: "Pre-Primary Coordinator",
    image: "/images/faculty-7.jpg",
    bio: "Specializes in early childhood development with a gentle and caring approach."
  },
  {
    name: "Mr. Zafar Iqbal",
    role: "Computer Science & IT",
    image: "/images/faculty-8.jpg",
    bio: "Prepares students for the digital future with coding and technological literacy."
  }
];

export default function Faculty() {
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
              Our Faculty
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Meet the dedicated educators who make LearnEase a place of excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 text-center px-4 md:px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
            Guidance with Heart
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our teachers are more than just instructors; they are mentors, role models, and advocates for every student. Carefully selected for their expertise and passion, they are committed to fostering a safe, engaging, and supportive learning environment.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="pb-28 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {FACULTY.map((member, i) => (
              <motion.div key={i} variants={scaleUp} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-primary/5">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm font-medium leading-tight">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 text-center flex-1 bg-white relative z-10">
                    <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
