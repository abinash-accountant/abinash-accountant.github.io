"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function EducationSection() {
  return (
    <AnimatedSection id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h4 className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3">
          Academic Background
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
          My Education
        </h2>
        <p className="text-muted-foreground">
          Educational qualifications that have shaped my professional knowledge
          and expertise in accounting and finance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="overflow-hidden border border-border/50 shadow-sm">
          <CardHeader className="bg-card/70 py-5 flex flex-row items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Bachelor of Commerce</h3>
              <p className="text-muted-foreground">BBS College</p>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-muted-foreground">2021</div>
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                Degree
              </div>
            </div>
            <p className="text-muted-foreground">
              Comprehensive education in commerce, accounting principles,
              financial management, taxation, and business administration,
              providing a strong foundation for my professional career in
              accounting.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}