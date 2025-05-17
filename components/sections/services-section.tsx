"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { 
  Building2, 
  Calculator, 
  FileText, 
  Heart, 
  LineChart, 
  ShieldCheck 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Comprehensive accounting solutions including bookkeeping, GST billing, and financial statements preparation.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Advisory",
    description: "Authorized Max Life Insurance advisor providing personalized insurance solutions for life and investments.",
  },
  {
    icon: LineChart,
    title: "Investment Services",
    description: "ZFunds Partner (Z23068) offering mutual funds, SIPs, fixed deposits, and RBI bonds investment options.",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "Complete assistance in company registration, GST registration, and other business compliance services.",
  },
  {
    icon: FileText,
    title: "Tax Services",
    description: "Expert handling of income tax returns, TDS filing, and tax planning for individuals and businesses.",
  },
  {
    icon: Heart,
    title: "Financial Planning",
    description: "Personalized financial planning services for long-term wealth creation and protection.",
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection id="services">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h4 className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3">
          What I Offer
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
          My Services
        </h2>
        <p className="text-muted-foreground">
          Comprehensive financial and business solutions tailored to meet your needs
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}