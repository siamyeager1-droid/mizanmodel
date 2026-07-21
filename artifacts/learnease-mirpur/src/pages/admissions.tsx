import { motion } from "framer-motion";
import { Link } from "wouter";
import { FileText, Users, CheckCircle, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer, scaleUp } from "@/lib/animations";

const STEPS = [
  {
    icon: FileText,
    title: "1. Submit Application",
    desc: "Complete the online application form or visit our campus to collect a physical form. Ensure all details are accurate."
  },
  {
    icon: Download,
    title: "2. Document Submission",
    desc: "Provide necessary documents including birth certificate, previous school records (if applicable), and photographs."
  },
  {
    icon: Users,
    title: "3. Interactive Session",
    desc: "Both parents and the child will be invited for a brief, friendly interaction with our academic coordinators."
  },
  {
    icon: CheckCircle,
    title: "4. Enrollment",
    desc: "Upon successful review, pay the admission fees to secure the seat and receive the welcome kit."
  }
];

export default function Admissions() {
  return (
    <div className="w-full bg-background">
      
      {/* Page Header */}
      <section className="bg-primary pt-24 pb-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/gallery-6.jpg" 
            alt="Background pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Admissions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Begin your child's educational journey with LearnEase Mirpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We have designed a straightforward and transparent admission process to make it easy for parents and students.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary/10 z-0" />
            
            {STEPS.map((step, i) => (
              <motion.div key={i} variants={scaleUp} className="relative z-10">
                <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow bg-white relative pt-8">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center border-4 border-white shadow-sm">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <CardContent className="pt-6 text-center px-6 pb-8">
                    <h3 className="text-lg font-serif font-bold text-primary mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="py-20 bg-white border-y border-border px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                <FileText className="text-secondary w-6 h-6" /> Required Documents
              </h3>
              <ul className="space-y-4">
                {[
                  "Completed Application Form",
                  "Birth Certificate (Copy)",
                  "2 Passport-size photographs of the student",
                  "1 Passport-size photograph of each parent",
                  "Previous school report card (for Grade 1 and above)",
                  "Transfer Certificate (if applicable)",
                  "Medical fitness certificate"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-primary/5 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Fee Structure Overview
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe in providing quality education at accessible rates. Our fee structure is transparent with no hidden charges.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="font-medium text-foreground">Admission Fee (One-time)</span>
                  <span className="font-bold text-primary">BDT 15,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="font-medium text-foreground">Security Deposit (Refundable)</span>
                  <span className="font-bold text-primary">BDT 5,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/10">
                  <span className="font-medium text-foreground">Monthly Tuition (Pre-Primary)</span>
                  <span className="font-bold text-primary">BDT 2,500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-foreground">Monthly Tuition (Primary & Up)</span>
                  <span className="text-sm text-muted-foreground">Varies by grade</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">
                * Fees are subject to change. Please contact the admissions office for a detailed fee schedule for specific grades.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleUp}
          className="container mx-auto max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Ready to Enroll?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Take the first step towards securing a bright future for your child. Our team is here to assist you through every step.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold shadow-xl">
              Contact Us to Enroll <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
