import { motion, useInView } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
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
import { useRef } from "react";

const formSchema = z.object({
  name: z.string().min(2, "নাম কমপক্ষে ২ অক্ষর হতে হবে।"),
  email: z.string().email("সঠিক ইমেইল ঠিকানা দিন।"),
  subject: z.string().min(5, "বিষয় কমপক্ষে ৫ অক্ষর হতে হবে।"),
  message: z.string().min(10, "বার্তা কমপক্ষে ১০ অক্ষর হতে হবে।"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    console.log(data);
    toast({
      title: "বার্তা পাঠানো হয়েছে!",
      description: "আমাদের সাথে যোগাযোগ করার জন্য ধন্যবাদ। শীঘ্রই আমরা আপনাকে উত্তর দেব।",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <span className="text-accent font-bold tracking-wider uppercase mb-3 block text-sm">যোগাযোগ করুন</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              আমাদের সাথে যোগাযোগ
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              কোনো প্রশ্ন থাকলে আমাদের জানান। আপনার বার্তা পাঠান অথবা সরাসরি ক্যাম্পাসে আসুন।
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">

          {/* Contact Form */}
          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={slideInRight}
            className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-border order-2 lg:order-1"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">বার্তা পাঠান</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>পূর্ণ নাম</FormLabel>
                      <FormControl><Input placeholder="আপনার নাম" className="bg-muted/30" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>ইমেইল ঠিকানা</FormLabel>
                      <FormControl><Input placeholder="example@email.com" type="email" className="bg-muted/30" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="subject" render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিষয়</FormLabel>
                    <FormControl><Input placeholder="সাধারণ জিজ্ঞাসা" className="bg-muted/30" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>বার্তা</FormLabel>
                    <FormControl>
                      <Textarea placeholder="কিভাবে আমরা আপনাকে সাহায্য করতে পারি?" className="min-h-[120px] resize-none bg-muted/30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" className="w-full sm:w-auto px-8">
                  বার্তা পাঠান <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2 h-fit"
          >
            <motion.div variants={fadeIn} className="bg-muted/20 p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-primary mb-2">ঠিকানা</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ১-এইচ, ১৩/৮, খুদারায়ট, শাহ আলী,<br />
                মিরপুর-১, ঢাকা-১২১৬
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-muted/20 p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-primary mb-2">ফোন</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ০১৬৮১৫৪৭৭৮০৫<br />
                ০১৭৯০৩৬৩০৮২৭
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-muted/20 p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-primary mb-2">ইমেইল</h4>
              <p className="text-sm text-muted-foreground leading-relaxed break-all">
                info@mijanmodel.edu.bd<br />
                admission@mijanmodel.edu.bd
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-muted/20 p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-primary mb-2">অফিস সময়</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                রবিবার - বৃহস্পতিবার<br />
                সকাল ৯টা - বিকাল ৪টা
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Google Map */}
        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}
          className="h-[300px] sm:h-[400px] w-full rounded-3xl overflow-hidden border border-border relative"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.834442829907!2d90.3527133153636!3d23.80638348456127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e8d0c7c3c7%3A0x7e0d2a2f4c7c5d5e!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1699999999999!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="মিজান মডেল হাই স্কুলের মানচিত্র"
            className="absolute inset-0"
          />
        </motion.div>

      </div>
    </section>
  );
}
