"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";

const education = {
  degree: "Bachelor of Science in Electrical & Computer Engineering",
  university: "Saint Cloud State University",
  location: "Saint Cloud, Minnesota",
  graduationDate: "May 2025",
  gpa: "3.0", // Optional - can be removed if preferred
};

const relevantCourses: { name: string; grade?: string }[] = [
  { name: "Digital Signal Processing", grade: "A" },
  { name: "Embedded Systems Design", grade: "A" },
  { name: "Computer Architecture", grade: "A-" },
  { name: "Analog Electronics", grade: "A" },
  { name: "Control Systems", grade: "B+" },
  { name: "FPGA Digital Logic Design", grade: "A" },
  { name: "Power Electronics", grade: "A-" },
  { name: "Electromagnetics", grade: "B+" },
  { name: "Computer Systems Programming (C/C++ & DSA)" },
  { name: "Power Systems, Electric Machines & Drives" },
];

const achievements = [
  {
    title: "Senior Design Project",
    description: "First place for innovative IoT-based smart grid monitoring system",
    year: "2025",
  },
  {
    title: "NASA UROP Research Experience",
    description: "Co-authored paper on FPGA-accelerated neural networks",
    year: "2024",
  },
  {
    title: "IEEE Student Member",
    description: "Active participation in technical workshops and competitions",
    year: "2022-2025",
  },
  {
    title: "Deans List",
    description: "Merit-based engineering scholarship for academic excellence",
    year: "2021-2025",
  },
];

const interests = [
  "Embedded Systems",
  "IoT & Smart Devices",
  "FPGA Development",
  "Machine Learning",
  "Computer HW/SW",
  "Robotics",
  "Electronics",
  "Edge Computing",
];

export default function AboutPage() {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const displayedCourses = showAllCourses
    ? relevantCourses
    : relevantCourses.slice(0, 4);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-muted rounded-3xl overflow-hidden">
                  {/* Replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 lg:right-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Badge variant="gradient" className="px-3 py-2">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Class of 2025
                </Badge>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 lg:left-8"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Badge variant="gradient" className="px-3 py-2">
                  <Star className="w-4 h-4 mr-1" />
                  {education.gpa} GPA
                </Badge>
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About <span className="gradient-text">Me</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I&apos;m a recent Electrical and Computer Engineering graduate with a passion 
                  for creating innovative solutions that bridge the gap between hardware and 
                  software. My journey in engineering has equipped me with a strong foundation 
                  in both theoretical concepts and practical applications.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Throughout my academic career, I&apos;ve had the opportunity to work on 
                diverse projects ranging from embedded systems and FPGA design to full-stack 
                web development. I thrive in environments where I can apply my problem-solving 
                skills to tackle complex challenges.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding or designing circuits, you can find me exploring 
                new technologies, contributing to open-source projects, or working on 
                personal maker projects. I&apos;m always eager to learn and take on new 
                challenges.
              </p>

              <div className="flex flex-wrap gap-2">
                {interests.slice(0, 5).map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Education Section */}
      <Section className="bg-muted/30">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
          </motion.div>

          <Card glass hover className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{education.degree}</h3>
                    <p className="text-lg text-primary">{education.university}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {education.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {education.graduationDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      GPA: {education.gpa}/4.0
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Coursework Section - Subtle Grade Display */}
      <Section>
        <Container size="lg">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Relevant <span className="gradient-text">Coursework</span>
            </h2>
            <p className="text-muted-foreground">
              Key courses that shaped my technical expertise
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedCourses.map((course, index) => (
              <motion.div
                key={course.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card hover className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-medium text-sm">{course.name}</span>
                      </div>
                      {course.grade && (
                        <Badge
                          variant={
                            course.grade.startsWith("A")
                              ? "gradient"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {course.grade}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {relevantCourses.length > 4 && (
            <div className="text-center mt-6">
              <Button
                variant="ghost"
                onClick={() => setShowAllCourses(!showAllCourses)}
              >
                {showAllCourses ? (
                  <>
                    Show Less <ChevronUp className="ml-2 w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show All Courses <ChevronDown className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* Achievements Section */}
      <Section className="bg-muted/30">
        <Container>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Achievements & <span className="gradient-text">Awards</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover glass className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {achievement.year}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interests */}
      <Section>
        <Container size="sm">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Interests & <span className="gradient-text">Hobbies</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm cursor-default"
                  >
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
}
