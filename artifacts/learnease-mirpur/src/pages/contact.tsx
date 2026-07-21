import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fadeIn, staggerContainer, slideInRight } from "@/lib/animations";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    // In a real app, this would be an API call
    console.log(data);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We will get back to you soon.",
    });
    form.reset();
  }

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
              Contact Us
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with any questions or to schedule a visit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're inquiring about admissions, seeking more information about our programs, or just want to say hello, we are here for you.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div variants={slideInRight} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Our Campus</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      House 12, Road 5, Block A,<br />
                      Mirpur-1, Dhaka 1216,<br />
                      Bangladesh
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={slideInRight} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      +880-2-1234-5678<br />
                      +880-1711-000000 (Admissions)
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={slideInRight} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      info@learneasemirpur.edu.bd<br />
                      admissions@learneasemirpur.edu.bd
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="h-12 bg-background border-border/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" className="h-12 bg-background border-border/50 focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Admission Inquiry" className="h-12 bg-background border-border/50 focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="min-h-[150px] resize-none bg-background border-border/50 focus-visible:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg font-bold">
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-lg">
            <MapPin className="w-8 h-8" />
          </div>
          <p className="text-primary font-bold font-serif text-xl bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full">
            Interactive Map Placeholder
          </p>
        </div>
      </section>

    </div>
  );
}
