"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: "software" | "accounting" | "other";
}

const skills: Skill[] = [
  { name: "Tally ERP-9", level: 95, category: "software" },
  { name: "Tally Prime", level: 90, category: "software" },
  { name: "Marg ERP", level: 85, category: "software" },
  { name: "MS Excel", level: 90, category: "software" },
  { name: "GST Filing", level: 95, category: "accounting" },
  { name: "Tax Return Filing", level: 90, category: "accounting" },
  { name: "Financial Statements", level: 85, category: "accounting" },
  { name: "Auditing", level: 80, category: "accounting" },
  { name: "Party Ledger Management", level: 90, category: "accounting" },
  { name: "Bookkeeping", level: 95, category: "accounting" },
  { name: "TDS Filing", level: 85, category: "accounting" },
  { name: "English", level: 85, category: "other" },
  { name: "Hindi", level: 95, category: "other" },
];

type FilterCategory = "all" | "software" | "accounting" | "other";

export function SkillsSection() {
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => filterCategory === "all" || skill.category === filterCategory
  );

  return (
    <AnimatedSection id="skills" className="bg-muted/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h4 className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3">
          Professional Expertise
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
          My Skills
        </h2>
        <p className="text-muted-foreground">
          A comprehensive overview of my technical proficiency in accounting
          software, taxation procedures, and professional competencies.
        </p>
      </motion.div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-muted/30 p-1 rounded-full">
          {["all", "software", "accounting", "other"].map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category as FilterCategory)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                filterCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">{skill.name}</h3>
              <span className="text-sm text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}