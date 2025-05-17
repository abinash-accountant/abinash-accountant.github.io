"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileDown, LinkedinIcon } from "lucide-react";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-muted/10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 font-heading"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-muted-foreground mb-8"
          >
            <p>
              I am a versatile financial professional with over 7 years of expertise in accounting, insurance, and business services. As an authorized Max Life Insurance Advisor (Agent Code: MAX80932D) and ZFunds Partner (Code: Z23068), I provide comprehensive financial solutions to my clients.
            </p>
            <p>
              My services span across accounting, GST billing, tax returns, insurance planning, mutual funds, and business registration services. I specialize in helping businesses with company registration, GST registration, and various compliance requirements including PAN/TAN applications and Aadhaar linking.
            </p>
            <p>
              Based in Meghalaya, I serve clients across India with expertise in Tally ERP-9, Tally Prime, and Marg ERP, along with extensive experience in financial planning and investment advisory services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild variant="outline" className="rounded-full gap-2">
              <a
                href="/Abinash.pdf"
                download
                className="flex items-center"
              >
                <FileDown size={18} />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full gap-2">
              <Link
                href="https://www.linkedin.com/in/abinash1311/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <LinkedinIcon size={18} />
                LinkedIn Profile
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            <Image
              src="/abinash-profile.jpeg"
              alt="Abinash Kumar Singh"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
              priority
            />
            <div className="absolute inset-0 border-8 border-background/10 rounded-2xl" />
          </div>
          <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-full bg-primary/10 -z-10" />
          <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-primary/5 -z-10" />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}