import { motion, useInView } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, Users, CheckCircle, Download, Clock, Phone, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fadeIn, staggerContainer, scaleUp, slideInRight } from "@/lib/animations";
import { useRef } from "react";

const STEPS = [
  { icon: Download, title: "১. ফর্ম সংগ্রহ", desc: "অনলাইন বা স্কুল অফিস থেকে ভর্তি ফর্ম সংগ্রহ করুন।" },
  { icon: FileText, title: "২. কাগজপত্র জমা", desc: "জন্ম নিবন্ধন, ছবি এবং পূর্ববর্তী স্কুলের রিপোর্ট জমা দিন।" },
  { icon: Users, title: "৩. মূল্যায়ন", desc: "শিক্ষার্থী এবং অভিভাবকের সাথে একটি সংক্ষিপ্ত আলাপ।" },
  { icon: CheckCircle, title: "৪. নিশ্চিতকরণ", desc: "ভর্তি ফি পরিশোধ করে আসন নিশ্চিত করুন।" }
];

const formSchema = z.object({
  parentName: z.string().min(2, "অভিভাবকের নাম প্রয়োজন।"),
  studentName: z.string().min(2, "শিক্ষার্থীর নাম প্রয়োজন।"),
  grade: z.string().min(1, "শ্রেণী নির্বাচন করুন।"),
  phone: z.string().min(10, "সঠিক মোবাইল নম্বর দিন।"),
  email: z.string().email("সঠিক ইমেইল ঠিকানা দিন।"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AdmissionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      studentName: "",
      grade: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "অনুসন্ধান জমা হয়েছে!",
      description: "আমাদের ভর্তি কমিটি শীঘ্রই আপনার সাথে যোগাযোগ করবে।",
    });
    form.reset();
  }

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white border-b border-border" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeIn}>
            <span className="text-accent font-bold tracking-wider uppercase mb-3 block text-sm">আমাদের পরিবারে যোগ দিন</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              ভর্তি
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              যারা শিক্ষা ও নৈতিকতার প্রতি আমাদের মূল্যবোধে বিশ্বাসী, তাদের স্বাগত জানাই। আমাদের ভর্তি প্রক্রিয়া সহজ ও স্বচ্ছ।
            </p>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial="hidden" animate={isInView ? "visible" : "hidden"} variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 relative"
        >
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-0.5 bg-primary/10 -translate-y-1/2 z-0" />

          {STEPS.map((step, i) => (
            <motion.div key={i} variants={scaleUp} className="relative z-10 bg-white border border-border p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-md border-4 border-white">
                <step.icon className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-primary mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enquiry Form */}
          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={slideInRight}
            className="lg:col-span-2 bg-muted/20 p-6 sm:p-10 rounded-3xl border border-border"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">অনলাইন অনুসন্ধান</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="parentName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>অভিভাবকের নাম</FormLabel>
                      <FormControl><Input placeholder="আব্দুল্লাহ আহমেদ" className="bg-white" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="studentName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>শিক্ষার্থীর নাম</FormLabel>
                      <FormControl><Input placeholder="ফাতেমা আক্তার" className="bg-white" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="grade" render={({ field }) => (
                    <FormItem>
                      <FormLabel>ভর্তির শ্রেণী</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="শ্রেণী নির্বাচন করুন" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="class1">১ম শ্রেণী</SelectItem>
                          <SelectItem value="class2">২য় শ্রেণী</SelectItem>
                          <SelectItem value="class3">৩য় শ্রেণী</SelectItem>
                          <SelectItem value="class4">৪র্থ শ্রেণী</SelectItem>
                          <SelectItem value="class5">৫ম শ্রেণী</SelectItem>
                          <SelectItem value="class6">৬ষ্ঠ শ্রেণী</SelectItem>
                          <SelectItem value="class7">৭ম শ্রেণী</SelectItem>
                          <SelectItem value="class8">৮ম শ্রেণী</SelectItem>
                          <SelectItem value="class9">৯ম শ্রেণী</SelectItem>
                          <SelectItem value="class10">১০ম শ্রেণী</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>মোবাইল নম্বর</FormLabel>
                      <FormControl><Input placeholder="০১XXXXXXXXX" className="bg-white" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>ইমেইল ঠিকানা</FormLabel>
                    <FormControl><Input placeholder="example@email.com" type="email" className="bg-white" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>আপনার প্রশ্ন (ঐচ্ছিক)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="কিভাবে আমরা সাহায্য করতে পারি?" className="min-h-[100px] resize-none bg-white" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" className="w-full sm:w-auto px-8">অনুসন্ধান জমা দিন</Button>
              </form>
            </Form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial="hidden" animate={isInView ? "visible" : "hidden"} variants={slideInRight}
            className="space-y-6"
          >
            <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
              <h4 className="font-serif font-bold text-xl mb-4">ভর্তি অফিস</h4>
              <ul className="space-y-4 text-sm text-primary-foreground/90">
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 shrink-0 text-accent" />
                  <span>রবিবার - বৃহস্পতিবার<br/>সকাল ৯টা - বিকাল ৪টা</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-accent" />
                  <span>০১৬৮১৫৪৭৭৮০৫</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/20 p-6 rounded-2xl border border-secondary/30">
              <h4 className="font-serif font-bold text-primary text-lg mb-3">প্রয়োজনীয় কাগজপত্র</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> জন্ম নিবন্ধনের কপি</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> ২ কপি পাসপোর্ট সাইজ ছবি</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> পূর্ববর্তী স্কুলের রিপোর্ট</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent" /> ট্রান্সফার সার্টিফিকেট</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-primary text-lg mb-2">বৃত্তি</h4>
              <p className="text-sm text-muted-foreground mb-4">মেধাবী শিক্ষার্থীদের জন্য ৬ষ্ঠ থেকে ১০ম শ্রেণী পর্যন্ত বৃত্তির সুযোগ রয়েছে।</p>
              <Button variant="outline" size="sm" className="w-full">বিস্তারিত দেখুন</Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
