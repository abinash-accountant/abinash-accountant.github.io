"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "CA Narayan Ratawa & Co",
    position: "Account Manager",
    duration: "Feb 2021 – Present",
    description:
      "Managing GST billing, auditing, and income tax return filing. Handling party ledger reconciliation and financial statement preparation. Responsible for TDS filing and compliance.",
  },
  {
    company: "Keshrichand Jaisukhlall Sethia",
    position: "Accounts Executive",
    duration: "Dec 2018 – Jan 2021",
    description:
      "Managed daily accounting operations including GST billing, inventory management, and financial reporting. Prepared and filed tax returns and maintained compliance with regulatory requirements.",
  },
  {
    company: "S M Trading Company",
    position: "Junior Accountant",
    duration: "June 2018 – Nov 2018",
    description:
      "Assisted in bookkeeping, bank reconciliation, and basic accounting functions. Supported senior accountants with GST filing and documentation.",
  },
];

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h4 className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3">
          Professional Journey
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
          My Experience
        </h2>
        <p className="text-muted-foreground">
          Over 7 years of progressive experience in accounting roles, developing
          expertise in financial management, taxation, and accounting software.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-border transform md:-translate-x-1/2" />

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              "relative flex flex-col md:flex-row gap-10 mb-16 last:mb-0",
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse text-right md:text-left"
            )}
          >
            {/* Timeline Circle */}
            <div className="absolute left-0 md:left-1/2 top-0 h-10 w-10 bg-background border-4 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
              <Briefcase className="h-4 w-4 text-primary" />
            </div>

            {/* Date (Desktop) */}
            <div className="hidden md:block w-1/2" />

            {/* Content */}
            <div className="pl-12 md:pl-0 md:w-1/2">
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <div className="md:hidden text-sm text-muted-foreground mb-2">
                  {exp.duration}
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                <div className="text-primary font-medium mb-3">
                  {exp.company}
                </div>
                <div className="hidden md:block text-sm text-muted-foreground mb-4">
                  {exp.duration}
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}