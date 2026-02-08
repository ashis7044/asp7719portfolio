"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Filter,
  Github,
  FileText,
  Play,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ExperienceType = "work" | "academic" | "research";

interface Experience {
  type: ExperienceType;
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
  link?: string;
  github?: string;
  document?: string;
  videoLink?: string;
}

const experiences: Experience[] = [
  {
    type: "work",
    title: "Firmware Engineering Intern",
    organization: "Transcend",
    location: "Fridley, MN",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Developed firmware for IoT devices using C/C++ and FreeRTOS",
      "Implemented communication protocols (I2C, SPI, UART) for sensor integration",
      "Optimized power consumption by 30% through sleep mode implementation",
      "Collaborated with hardware team on PCB design reviews",
    ],
    document: "https://drive.google.com/file/d/1Fz5HoqjKco81GC3Rcpkjd--wpY4kCw2o/view?usp=sharing",
    skills: ["C/C++", "FreeRTOS", "Medical Devices", "Embedded Systems"],
  },
  {
    type: "research",
    title: "NASA-ISG Undergraduate Research Intern",
    organization: "UIUC Research Lab",
    location: "Champaign, IL",
    startDate: "May 2022",
    endDate: "August 2022",
    description: [
      "Researched FPGA-accelerated machine learning for edge computing",
      "Co-authored paper published in IEEE conference proceedings",
      "Developed Verilog modules for neural network inference",
      "Presented findings at undergraduate research symposium",
    ],
    document: "https://drive.google.com/file/d/1rW2SsiVI5byHvFTic7dsZiFXBQaV2Abu/view?usp=sharing",
    skills: ["FPGA", "Verilog", "Machine Learning", "Research"],
   
  },
  {
    type: "academic",
    title: "Senior Design Project",
    organization: "Saint Cloud State University",
    location: "Saint Cloud, MN",
    startDate: "Sept 2025",
    endDate: "Dec 2025",
    description: [
      "Led team of 4 students in developing smart grid monitoring system",
      "Designed custom PCB for data acquisition and wireless transmission",
      "Implemented real-time data visualization dashboard",
      "Won first place in departmental design competition",
    ],
    skills: ["Team collaboration", "PCB Design", "FreeRTOS", "Sensor Fusion"],
    document: "https://drive.google.com/file/d/1QUJyTAowjudIeftRK-5p_jG3Jyz-LCYI/view?usp=sharing",

  },
  {
    type: "work",
    title: "University STEM Tutor",
    organization: "University Student Advising Department",
    location: "Saint Cloud, MN",
    startDate: "Jan 2025",
    endDate: "May 2025",
    description: [
      "Provided technical support for campus computing resources",
      "Troubleshot hardware and software issues for students and staff",
      "Assisted in network infrastructure maintenance",
      "Developed automation scripts to streamline common tasks",
    ],
    skills: ["Technical Support", "Networking", "Scripting", "Customer Service"],
  },


  {
    type: "work",
    title: "University Career Peer Advisor",
    organization: "UIUC ECS Career Services",
    location: "Champaign, IL",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    description: [
      "Provided technical support for campus computing resources",
      "Troubleshot hardware and software issues for students and staff",
      "Assisted in network infrastructure maintenance",
      "Developed automation scripts to streamline common tasks",
    ],
    skills: ["Technical Support", "Networking", "Scripting", "Customer Service"],
  },


];

const typeConfig = {
  work: {
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    label: "Work Experience",
  },
  academic: {
    icon: GraduationCap,
    color: "from-purple-500 to-pink-500",
    label: "Academic",
  },
  research: {
    icon: GraduationCap,
    color: "from-amber-500 to-orange-500",
    label: "Research",
  },
};

export default function ExperiencePage() {
  const [selectedType, setSelectedType] = useState<ExperienceType | "all">("all");

  const filteredExperiences =
    selectedType === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === selectedType);

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section>
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A timeline of my professional journey, academic achievements, and research endeavors
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Filter Buttons */}
      <Section className="pt-0">
        <Container>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={selectedType === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType("all")}
              className="transition-all"
            >
              {selectedType === "all" && <Filter className="w-4 h-4 mr-2" />}
              All
            </Button>
            {(Object.entries(typeConfig) as [ExperienceType, typeof typeConfig[ExperienceType]][]).map(([key, config]) => (
              <Button
                key={key}
                variant={selectedType === key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(key)}
                className="transition-all"
              >
                {selectedType === key && <Filter className="w-4 h-4 mr-2" />}
                <config.icon className="w-4 h-4 mr-1" />
                {config.label}
              </Button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            <div className="space-y-12">
              <AnimatePresence mode="popLayout">
                {filteredExperiences.map((exp, index) => {
                  const config = typeConfig[exp.type];
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={`${exp.title}-${exp.startDate}`}
                      layout
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`relative flex flex-col md:flex-row items-start gap-8 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-background z-10" />

                      {/* Card */}
                      <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                      <Card hover glass>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center flex-shrink-0`}
                            >
                              <config.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 flex-wrap">
                                <h3 className="text-lg font-semibold">{exp.title}</h3>
                                <div className="flex items-center gap-1">
                                  {exp.link && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a href={exp.link} target="_blank" rel="noopener noreferrer" title="Website">
                                        <ExternalLink className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {exp.github && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a href={exp.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                        <Github className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {exp.document && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a href={exp.document} target="_blank" rel="noopener noreferrer" title="Documentation">
                                        <FileText className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  )}
                                  {exp.videoLink && (
                                    <Button variant="ghost" size="icon" asChild>
                                      <a href={exp.videoLink} target="_blank" rel="noopener noreferrer" title="Video">
                                        <Play className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <p className="text-primary font-medium">{exp.organization}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.startDate} - {exp.endDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>

                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex">
                                <span className="mr-2 text-primary">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                    </motion.div>
                );
              })}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {filteredExperiences.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground">
                  No experiences found for this category.
                </p>
              </motion.div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
