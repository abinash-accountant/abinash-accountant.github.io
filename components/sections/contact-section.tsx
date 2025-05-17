"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Check,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  SendIcon,
} from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    // In a real application, you would send this data to a server
    console.log(data);
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <AnimatedSection id="contact" className="bg-muted/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h4 className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3">
          Get In Touch
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
          Contact Me
        </h2>
        <p className="text-muted-foreground">
          Feel free to reach out for professional inquiries, collaborations, or
          any questions you might have.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="md:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Ready to respond to your inquiries
              </p>
              <Link
                href="mailto:avinash7421@gmail.com"
                className="text-primary hover:underline text-sm font-medium"
              >
                avinash7421@gmail.com
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Available during business hours
              </p>
              <Link
                href="tel:+917640917440"
                className="text-primary hover:underline text-sm font-medium"
              >
                +91-7640917440
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Linkedin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm text-muted-foreground mb-1">
                Connect with me professionally
              </p>
              <Link
                href="https://www.linkedin.com/in/abinash1311/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                linkedin.com/in/abinash1311
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-start gap-4"
          >
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">
                Based in India, available for remote collaboration
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-card border rounded-lg p-6 shadow-sm"
        >
          {!isSubmitted ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            type="email"
                            {...field}
                          />
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
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How can I help you?"
                          {...field}
                        />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="min-h-32 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full rounded-full"
                  size="lg"
                >
                  <SendIcon className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </Form>
          ) : (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Thank you for getting in touch. I will get back to you as soon
                as possible.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-6"
              >
                Send Another Message
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}