"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="flex flex-col items-center text-center md:text-left md:items-start max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm md:text-base text-primary font-medium"
          >
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading"
          >
            Abinash Kumar Singh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl font-medium mb-8 h-[2.5rem] md:h-[3rem]"
          >
            <TypeAnimation
              sequence={[
                "Account Manager",
                1000,
                "Max Life Insurance Advisor",
                1000,
                "ZFunds Partner",
                1000,
                "Financial Advisor",
                1000,
                "Business Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-muted-foreground"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl"
          >
            With 7+ years of experience in accounting, insurance, mutual funds, and business registration services. Authorized Max Life Insurance Advisor (MAX80932D) and ZFunds Partner (Z23068).
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="px-8 rounded-full shadow-lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 rounded-full"
            >
              <Link href="#about">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <Link href="#about">
            <ArrowDownCircle className="w-10 h-10 text-primary/80" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}