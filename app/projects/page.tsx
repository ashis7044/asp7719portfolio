"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Filter,
  FileText,
  Play,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  video?: string;
  tags: string[];
  category: string | string[];
  github?: string;
  demo?: string;
  document?: string;
  videoLink?: string;
  featured: boolean;
}

const projects: Project[] = [
  


{
    id: "dsp-kalman-filter",
   title: "Kalman Filter for Inertial Navigation System (INS) Error Estimation",
description: "Designed and implemented a 3D Kalman Filter in MATLAB for robust sensor fusion to estimate and correct drift errors in an Inertial Navigation System (INS). The system integrated noisy INS measurements with an aiding source (simulating GPS/Doppler radar) to generate a highly accurate and smooth state estimate. Project involved converting continuous differential equations into discrete-time state-space models for position, velocity, and aiding sensor errors (Wiener and Gauss-Markov processes). Successfully demonstrated the filter's capability in mitigating measurement noise and preventing INS drift for reliable navigation.",
tags: ["Kalman Filter", "Sensor Fusion", "INS", "Estimation Theory", "State-Space Modeling", "MATLAB", "Signal Processing", "GNC"],
 image: "/images/KalmanDsp.png",
    category: "Signal Processing",
    document:"https://docs.google.com/document/d/1dxNXzzmOUAU4IfYLqB1QrYsEtvw7PPxq/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    featured: true,
  },
  {
    id: "mmwave-radar",
    title: "Signal Processing for Range Detection in SFCW Radar Systems",
description: "Research project focused on stepped-frequency continuous-wave (SFCW) radar signal processing, including range estimation, IFFT-based range profiling, system parameter analysis, Doppler-induced range shift analysis, and MATLAB-based simulation using real radar data",
tags: ["Radar Signal Processing", "SFCW Radar", "Digital Signal Processing (DSP)", "MATLAB", "FFT / IFFT", "Range Resolution", "Doppler Effect", "Electromagnetic Waves", "RF Systems", "Radar Simulation", "Research & Development"],
image: "/images/uropRadar.png",
    category: "Signal Processing",
  
document: "https://www.dropbox.com/scl/fo/028tp8vzmipfatii98ktt/AGh-CrSaf9T7jOlYrLQJFwE?rlkey=htnkmnyf1yd9hoa8eck41kwx4&st=8nhskg9n&dl=0",
    featured: true,
  },
  {
    id: "fpga-keypad-scanner",
    title: "Finite State Machine Implementation for Signed Digital Calculator on FPGA",
description: "Designed and implemented a **Finite State Machine (FSM)** in **Verilog HDL** for a **signed integer calculator interface** on a **Nexys FPGA Board**. The robust system utilizes a **shift register** mechanism (R0-R3) and five states (S0-S4) to accept and store up to four BCD digits while performing **input validation** (limiting to 0-9). Engineered a dedicated **`shiftSign` module** to dynamically manage and correctly position the negative sign on a **seven-segment display**, ensuring proper display regardless of the number of digits entered. This project successfully demonstrated **hardware-software integration** and **synchronous design** principles.",
tags: ["Verilog HDL", "FPGA Development", "Finite State Machine (FSM)", "Digital Logic Design", "Signed Arithmetic", "Nexys Board", "Vivado", "Hardware-Software Integration", "Embedded Systems"],
document:"https://docs.google.com/document/d/1Hi16KRczsaI1t8-Gd7TR8OtOLMBY80OR/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    image: "/images/FPGA.png",
    videoLink: "https://www.dropbox.com/scl/fi/vhlcmp6r7bnla6b89ofi1/Video-Apr-05-2024-6-01-52-PM.mov?rlkey=fbsfeo3uxf8mczgyna85hpbtx&st=fqz5hpny&dl=0",
    category: "Digital Logic Design", 
    featured: true,
  },

 {
    id: "fpga-Seg Adder-Display",
    title: "FPGA BCD Adder & 7-Seg Display",
description: "Designed and implemented a high-performance **2-Digit Binary-Coded Decimal (BCD) Adder** in **Verilog HDL** for the **NEXYS FPGA Board**. The system incorporates custom modules for **1-Digit BCD addition**, **code conversion**, and a **synchronous 8-digit 7-segment display driver** for visualization. The circuit is capable of generating a 3-digit output, including the **carry-out**, successfully demonstrating core principles of **digital arithmetic** and **hardware description language (HDL) programming**.",
tags: ["Verilog HDL", "FPGA Implementation", "Digital Logic Design", "BCD Adder", "7-Segment Display", "Synchronous Design", "Digital Arithmetic", "Hardware Description Language", "NEXYS Board"],
document:"https://docs.google.com/document/d/1n_7zZhVvS2S806R6cGDE04LpyUlQC2or/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    image: "/images/FPGASeg.jpg",
    category: "Digital Logic Design", 
      videoLink: "https://drive.google.com/file/d/1i0Y-kSlALN3RVqvh8jDL-gwWjj2DWOaT/view?usp=sharing",
    featured: true,
  },

  {
    id: "Control System",
    title: "Closed loop Servo Position Control System",
description: "Designed and implemented a **digital Proportional-Integral (PI) controller** for a **servo speed control system**, building upon an existing baseline. Developed the controller to meet stringent performance criteria, including an aggressive **0.033-second settling time** and **less than 5% overshoot**. Performed system **simulation (Simulink)**, **hardware implementation**, and extensive **comparative testing** to validate design. Successfully achieved a low **0.5% overshoot** and conducted **steady-state error analysis** for a unit-ramp input, validating theoretical concepts of **PID control** through practical application.",
tags: ["Control Systems Engineering", "Digital Control", "PI Controller", "Simulink", "System Modeling", "Hardware Implementation", "Mechatronics", "Feedback Control", "Embedded Systems"],
 image: "/images/control_system.png",
    category: "Power & Control",
    document:"https://docs.google.com/document/d/1qxdpTKDTznLBdNm9vrIanzdW8VT8R_tJ/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    featured: true,
  },
  {
    id: "ac-induction-motor-driver",
    title: "Three Phase AC Induction Motor Driver",
description: "Designed, simulated, and analyzed a **Three-Phase Induction Motor Drive System** using **PSIM** for a high-voltage application. The architecture includes a **3-phase diode bridge rectifier**, **IGBT transistor inverter**, and a **PWM switch controller** for **AC-DC-AC conversion**. Performed **power flow analysis** and **transient simulations** to evaluate **3-phase current** and **voltage waveforms**, demonstrating the impact of **PWM frequency** on output quality and the controller's role in maintaining desired **torque and speed** under varying load conditions.",
tags: ["Power Electronics", "Induction Motor Drive", "PSIM Simulation", "IGBT", "PWM Control", "AC-DC Conversion", "Control Systems", "Electrical Engineering"], 
document: "https://drive.google.com/file/d/1XA91d0pC1vHTgDDDG0uowIBfpNz2CrVw/view?usp=sharing",
    category: "Power & Control",
    image: "/images/motordriver.png",
 
    featured: false,
  },
  {
    id: "cfoa-amplifier",
  title: "High-Speed Current Feedback Op-Amp Design and Second-Order Active Filter Implementation",
description: "Designed and analyzed a **Current Feedback Operational Amplifier (CFOA)**, demonstrating its **inherently faster slew-rate capability** and superior transient performance compared to Voltage Feedback Amplifiers. Implemented a **2nd Order Active Low Pass Filter**, investigating the effects of **frequency and Q scaling** by manipulating component values. Validated circuit performance through **LTSpice simulation**, achieving a stable **closed-loop gain of 2** and calculating a high **slew rate (SR) of 15.9 V/µs**. The project involved comprehensive **transient analysis**, **DC operating point analysis**, and **frequency response simulation**.",
tags: ["Current Feedback Op Amp", "Analog Circuit Design", "Active Filter Design", "Slew Rate", "LTSpice", "Simulation and Analysis", "Analog Electronics", "Frequency Response"], 
document: "https://docs.google.com/document/d/1mFoIWeQtzk_tjknTB0WSbNltBi_v-6ka/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    image: "/images/analog.png",
    category: "Circuit Design",
    featured: false,
  },
  {
    id: "smps-design",
    title: "Switch-Mode Power Supply Design",
description: "Designed and implemented a high-efficiency **Switch-Mode Power Supply (SMPS)** to perform **AC-DC power conversion** (120V AC to 5V DC). The architecture utilizes a **buck converter** topology with the **LT1076 CT5 regulator** for robust **voltage regulation** and a **9F8-48 transformer** for initial voltage step-down. The final system achieved a stable 5V DC output with a high current capability (0.33A-1A) and **minimal ripple** (0.224% in simulation), validating the design through **LTSpice simulation** and **oscilloscope output** analysis.",
tags: ["Power Electronics", "Switch-Mode Power Supply (SMPS)", "Buck Converter", "Voltage Regulation", "AC-DC Conversion", "Circuit Design", "LTSpice", "Analog Electronics", "System Simulation"], 
document: "https://docs.google.com/document/d/1Ru_Rr_nkPKUi-IC-TuUeKs6Qbnp2WqaV/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    category: ["Circuit Design", "Power & Control"],
    image: "/images/PowerSupply.png",
    featured: false,
  },
  {
    id: "patch-antenna",
    title: "Patch Antenna Design",
    description:
      "Real-time FFT spectrum analyzer using STM32 and TFT display",
    tags: ["DSP", "STM32", "C", "Embedded Systems"],
    category: "Electromagnetics",
    featured: false,
  },
  {
    id: "servo-motor-driver",
    title: "Device Driver & Embedded Servo Motor Controller",
description: "Designed and implemented an **embedded system** using the **LPC1114 ARM Microcontroller** and **ARM Assembly Language** to generate **Pulse Width Modulation (PWM)** signals via hardware timers. Enabled precise **servo motor control** (0 to 180 degrees) via a **keypad interface** and **LCD feedback**. The system features **interrupt-driven input handling**, configuration of **multiple 32-bit timers** for high-precision PWM, and **on-chip SRAM memory management** for storing pulse parameters, demonstrating expertise in low-level control and **system integration**.",
tags: ["Embedded Systems", "PWM Generation", "Servo Motor Control", "ARM Assembly", "Microcontroller (LPC1114)", "GPIO", "Timers/Interrupts", "Keil uVision", "Hardware-Software Integration", "Low-Level Programming"], 
document: "https://docs.google.com/document/d/17hjXy1J5khpZpvNnJJpWWBRo5xuh4GKU/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    category: ["HW/Embedded System", "Power & Control"],
    image: "/images/servoEmbedded.png",
    featured: false,
  },




{
    id: "lora-remote-control",
    title: "Low-Power, Long-Range LoRa-Based Remote Control System for Motor Control",
description: "Designed and implemented a full **embedded system** for a motorized boat using **LoRa** for long-range communication. The system pairs an **Arduino** transmitter with a **PIC24EP128GP202 microcontroller** receiver, which manages an **L298N motor controller** via **GPIO**. Engineered robust **digital communication protocols**, including implementation of **UART** and **AT commands** for module configuration, along with **parsing algorithms** and a **software circular buffer** to ensure **low-latency** and **data integrity** for reliable remote maneuvering.",
tags: ["Embedded Systems", "LoRa", "PIC Microcontroller (MCU)", "Arduino", "PIC24", "Motor Control", "Digital Communications", "UART", "Hardware Design", "Wireless Communication"], 
document: "https://docs.google.com/document/d/10XDYSTVLPRuqUzuuoBa65qyKJcJzsw19/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
    category: ["Electromagnetics", "HW/Embedded System"],
    image: "/images/CommSys.png",
    featured: false,
  },
  {
    id: "multi-sensor-rtos",
    title: "Real-Time Embedded System for Sonar/GPS Mapping with FreeRTOS and Mutex Synchronization",
description: "Designed and implemented a high-reliability **Real-Time Embedded System** using **FreeRTOS** on a **Microchip PIC24EP128GP202** microcontroller for an **RC boat with Sonar/GPS Mapping**. Architected and managed three concurrent, prioritized tasks (**Sonar, GPS, Recorder**) to perform **multi-sensor data integration** and logging. Implemented advanced **synchronization mechanisms** using **Mutexes** (including **Priority Inheritance**) to prevent **race conditions** on shared sensor data and utilized **critical sections** for time-sensitive I/O. Achieved deterministic, non-blocking operation using **preemptive scheduling** for efficient resource utilization.",
tags: ["FreeRTOS", "Real-Time Operating System (RTOS)", "Embedded C", "Microcontroller (PIC24)", "Sensor Fusion", "Task Scheduling", "Mutex", "Priority Inheritance", "Concurrency", "Hardware-Software Interface"], 
document: "https://drive.google.com/file/d/1tXycSOaX4-BnAuuK3v_NIIxVb3bTBDzU/view?usp=sharing",
    category: ["HW/Embedded System", "Software (OOP)"],
    image: "/images/rtos.png",
    featured: false,
  },
  {
    id: "sonar-sensor-circuit",
    title: "Sonar Sensor Circuit Design",
description: "Engineered and implemented a custom **40 kHz sonar transceiver** circuit for depth measurement, featuring a multi-stage **analog front-end** and high-voltage transmitter. The **Transmitter** utilizes an **H-bridge inverter** and a **1:10 variable impedance transformer** to generate a **40-volt peak-to-peak pulse**. The **Receiver** employs a **Low Noise Instrumentation Amplifier (INA129)** for initial high-gain amplification, followed by an **LM741-based active filter** and final **rectification stage** before **Analog-to-Digital Conversion (ADC)**, demonstrating robust **analog circuit design** and **signal conditioning** for environmental sensing.",
tags: ["Analog Circuit Design", "Sonar Transceiver", "Signal Conditioning", "Instrumentation Amplifier", "H-Bridge Inverter", "Active Filter", "Low-Noise Design", "Power Electronics", "Transducer Interface", "Hardware Engineering"], 

    category: "Circuit Design",
    image: "/images/sonarCircuit.png",
document: "https://drive.google.com/file/d/1QUJyTAowjudIeftRK-5p_jG3Jyz-LCYI/view?usp=sharing",
    featured: false,
  },
 {
    id: "Digital Electronics",
  title: "Digital Electronics - Half Adder Design and Implementation using CMOS and SystemVerilog",
description: "Designed and implemented a **Half Adder** circuit using **CD4007 CMOS transistors** and fundamental logic gates (**NAND, NOR, NOT**). The project involved comprehensive **hardware-level design** and **simulation (LTSpice)** for truth table verification, followed by **digital logic synthesis** using **Xilinx Vivado** and **SystemVerilog HDL**. Demonstrated expertise in **CMOS circuit design**, conversion of complex logic (XOR) to **universal gates**, and **Hardware Description Language (HDL) verification**.",
tags: ["CMOS Transistors", "Digital Logic Design", "SystemVerilog", "Xilinx Vivado", "LTSpice", "Circuit Simulation", "Hardware Description Language (HDL)", "Universal Gates", "Hardware Implementation"],

    category: "Circuit Design",
    image: "/images/HA.png",
document: "https://docs.google.com/document/d/1fHK8UWRuaKPc0ZGNkJoSnzqUAKiSiyy5/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true" ,
   featured: false,
  },

  {
    id: "maze-sudoku-solver",
    title: "Maze & Sudoku Algorithm Solver",
description: "Developed a C program to solve mazes using a recursive **Depth First Search (DFS)** algorithm. Implemented custom **memory management** for the maze data structure and validated the pathfinding logic.",
tags: ["C Programming", "Depth First Search (DFS)", "Algorithm Design", "Recursive Algorithms", "Data Structures", "Memory Management", "Pathfinding", "Problem Solving"],  
    category: "Software (OOP)",
    image: "/images/sudokuMaze.png",
    github: "https://github.com/ashis7044",
    featured: false,
  },
  {
    id: "vlsi-floorplanning",
title: "Slicing Tree Floorplanner for VLSI Physical Design",
description: "Developed a C program to implement a **Slicing Tree** (binary tree structure) for VLSI floorplanning. Performed geometric optimizations using tree manipulations (rotate, recut, swap topology/modules) and generated the **Polish Expression** for module packing to minimize total chip area.",
tags: ["VLSI Physical Design", "Floorplanning", "Slicing Tree", "Binary Tree", "Optimization Algorithms", "Data Structures", "C Programming", "Postfix Expression"],  

    category: "Software (OOP)",
    image: "/images/floorplan.png",
    github: "https://github.com/ashis7044",
    featured: false,
  },
  {
    id: "geometric-shape-engine",
    title: "C++ Object-Oriented Geometric Shape Analysis and Data Visualization Tool",
description: "Developed a C++ **Object-Oriented** solution for geometric shape analysis, utilizing **Polymorphism** and **Template Programming** for unified calculations across 2D/3D shapes. Implemented **Operator Overloading** for shape manipulation and designed efficient algorithms for computing properties like area, volume, surface area, and centroids. The project emphasizes **software architecture**, **data structures**, and **algorithm design**, providing a modular and extensible framework for geometric computations with robust error handling and debugging techniques.",
tags: ["C++", "Object-Oriented Programming (OOP)", "Polymorphism", "Template Programming", "Operator Overloading", "Geometric Modeling", "Algorithm Design", "Data Structures", "Software Architecture", "Debugging"], 

    category: "Software (OOP)",
    image: "/images/geometricengine.png",
    github: "https://github.com/ashis7044",
    featured: false,
  },
  {
    id: "sparse-matrix",
    title: "Sparse Matrix Operations and Fundamental Data Structures in C",
description: "Developed a foundational **data structures and algorithms** implementation in **C** for efficient **sparse matrix operations**. Engineered a linked list of tuples data structure for **memory optimization**, implementing core matrix functions: **addition, multiplication, and file I/O**.",
tags: ["C Programming", "Data Structures", "Algorithms", "Sparse Matrix", "Linked List", "Memory Optimization", "Scientific Computing", "Numerical Methods"], 

    category: "Software (OOP)",
    image: "/images/sparseMatrix.png",
    github: "https://github.com/ashis7044",
    featured: false,
  },
  

 {
    id: "web",
    title: "Hackathonn 1st Place - BooHoo Webapp",
    description:
      "Fullstack Web Application, Boo Hoo App buildt during Hackathon",
    tags: ["Front end", "backend", "RestAPI", "web design", "JavaScript"],
    category: "Web",
    image: "/images/boo-hoo.png",
    github: "https://github.com/ashis7044",
    featured: false,
  },

  {
    id: "test-automation-python",
    title: "Device Test Automation using Python",
description: "Designed and implemented a comprehensive **Python-based automated testing framework** for electromechanical product validation. The **unified Command Line Interface (CLI)** controls **five distinct lab instruments** (Oscilloscope, Power Supply, Flowmeter, Breathing Simulator, CPAP device). Achieved **high-speed, non-blocking data acquisition** by leveraging **multi-threading**. The architecture utilized **Object-Oriented Programming (OOP)** and implemented **SCPI-like commands** to manage devices and log data to **CSV files**.",
tags: ["Python", "Test Automation", "Hardware-in-the-Loop (HIL)", "Data Acquisition", "Object-Oriented Programming (OOP)", "SCPI", "Multithreading", "CLI Development", "Firmware Communication"],  

    category: "HW/Embedded System",
    image: "/images/pythonAutomation.png",
    github: "https://github.com/ashis7044",
    featured: false,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Modern portfolio built with Next.js 15, featuring animations and MDX blog",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    image: "/images/web.png",
    github: "https://github.com/ashis7044",
    demo: "https://demo.com",
    featured: false,
  },





];

const categories = [
  "All",
  "HW/Embedded System",
  "Software (OOP)",
  "Circuit Design",
  "Electromagnetics",
  "Power & Control",
  "Digital Logic Design",
  "Signal Processing",
  "Web",
];

/** Check if a project matches a category (supports single or multi-category) */
function matchesCategory(project: Project, category: string): boolean {
  if (category === "All") return true;
  if (Array.isArray(project.category)) {
    return project.category.includes(category);
  }
  return project.category === category;
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) =>
    matchesCategory(p, selectedCategory)
  );

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

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
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              A collection of personal and academic projects showcasing my skills 
              in hardware design, embedded systems, and software development
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Filter */}
      <Section className="pt-0">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category === selectedCategory && (
                  <Filter className="w-4 h-4 mr-2" />
                )}
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="gradient-text">Featured</span> Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <Card hover className="h-full overflow-hidden group">
                        {/* Project Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-4xl">🔧</span>
                            </div>
                          )}
                          {/* Overlay on hover */}
                          <motion.div
                            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.github && (
                              <Button size="icon" variant="ghost" className="text-white" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                  <Github className="w-5 h-5" />
                                </a>
                              </Button>
                            )}
                            {project.demo && (
                              <Button size="icon" variant="ghost" className="text-white" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              </Button>
                            )}
                            {project.document && (
                              <Button size="icon" variant="ghost" className="text-white" asChild>
                                <a href={project.document} target="_blank" rel="noopener noreferrer" title="Documentation">
                                  <FileText className="w-5 h-5" />
                                </a>
                              </Button>
                            )}
                            {project.videoLink && (
                              <Button size="icon" variant="ghost" className="text-white" asChild>
                                <a href={project.videoLink} target="_blank" rel="noopener noreferrer" title="Video">
                                  <Play className="w-5 h-5" />
                                </a>
                              </Button>
                            )}
                          </motion.div>
                          {/* Featured badge */}
                          <Badge
                            variant="gradient"
                            className="absolute top-3 right-3"
                          >
                            Featured
                          </Badge>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
                              <Badge key={cat} variant="gradient" className="text-xs">
                                {cat}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 4).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 4 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.tags.length - 4}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Other <span className="gradient-text">Projects</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatePresence mode="popLayout">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <Card hover className="h-full overflow-hidden">
                        {/* Project Image */}
                        <div className="relative h-36 bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-3xl">🔧</span>
                            </div>
                          )}
                          {/* Overlay on hover */}
                          <motion.div
                            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredProject === project.id ? 1 : 0,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.github && (
                              <Button size="icon" variant="ghost" className="text-white h-8 w-8" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                                  <Github className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            {project.demo && (
                              <Button size="icon" variant="ghost" className="text-white h-8 w-8" asChild>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            {project.document && (
                              <Button size="icon" variant="ghost" className="text-white h-8 w-8" asChild>
                                <a href={project.document} target="_blank" rel="noopener noreferrer" title="Documentation">
                                  <FileText className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                            {project.videoLink && (
                              <Button size="icon" variant="ghost" className="text-white h-8 w-8" asChild>
                                <a href={project.videoLink} target="_blank" rel="noopener noreferrer" title="Video">
                                  <Play className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                          </motion.div>
                        </div>

                        <CardContent className="p-5">
                          <h3 className="font-semibold mb-2">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {(Array.isArray(project.category) ? project.category : [project.category]).map((cat) => (
                              <Badge key={cat} variant="gradient" className="text-xs">
                                {cat}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </Container>
      </Section>
    </div>
  );
}









// {
//     id: "dsp-kalman-filter",
//    title: "Kalman Filter for Inertial Navigation System (INS) Error Estimation",
// description: "Designed and implemented a 3D Kalman Filter in MATLAB for robust **sensor fusion** to estimate and correct drift errors in an Inertial Navigation System (INS). The system integrated noisy INS measurements with an aiding source (simulating GPS/Doppler radar) to generate a highly accurate and smooth state estimate. Project involved converting continuous differential equations into discrete-time **state-space models** for position, velocity, and aiding sensor errors (Wiener and Gauss-Markov processes). Successfully demonstrated the filter's capability in **mitigating measurement noise** and preventing **INS drift** for reliable **navigation**.",
// tags: ["Kalman Filter", "Sensor Fusion", "INS", "Estimation Theory", "State-Space Modeling", "MATLAB", "Signal Processing", "GNC"],
//  image: "/images/KalmanDsp.png",
//     category: "Signal Processing",
//     document:"https://docs.google.com/document/d/1dxNXzzmOUAU4IfYLqB1QrYsEtvw7PPxq/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     featured: true,
//   },
//   {
//     id: "mmwave-radar",
//     title: "Signal Processing for Range Detection in SFCW Radar Systems",
// description: "Research project focused on stepped-frequency continuous-wave (SFCW) radar signal processing, including range estimation, IFFT-based range profiling, system parameter analysis, Doppler-induced range shift analysis, and MATLAB-based simulation using real radar data",
// tags: ["Radar Signal Processing", "SFCW Radar", "Digital Signal Processing (DSP)", "MATLAB", "FFT / IFFT", "Range Resolution", "Doppler Effect", "Electromagnetic Waves", "RF Systems", "Radar Simulation", "Research & Development"],
// image: "/images/uropRadar.png",
//     category: "Signal Processing",
  
// document: "https://www.dropbox.com/scl/fo/028tp8vzmipfatii98ktt/AGh-CrSaf9T7jOlYrLQJFwE?rlkey=htnkmnyf1yd9hoa8eck41kwx4&st=8nhskg9n&dl=0",
//     featured: true,
//   },
//   {
//     id: "fpga-keypad-scanner",
//     title: "Finite State Machine Implementation for Signed Digital Calculator on FPGA",
// description: "Designed and implemented a **Finite State Machine (FSM)** in **Verilog HDL** for a **signed integer calculator interface** on a **Nexys FPGA Board**. The robust system utilizes a **shift register** mechanism (R0-R3) and five states (S0-S4) to accept and store up to four BCD digits while performing **input validation** (limiting to 0-9). Engineered a dedicated **`shiftSign` module** to dynamically manage and correctly position the negative sign on a **seven-segment display**, ensuring proper display regardless of the number of digits entered. This project successfully demonstrated **hardware-software integration** and **synchronous design** principles.",
// tags: ["Verilog HDL", "FPGA Development", "Finite State Machine (FSM)", "Digital Logic Design", "Signed Arithmetic", "Nexys Board", "Vivado", "Hardware-Software Integration", "Embedded Systems"],
// document:"https://docs.google.com/document/d/1Hi16KRczsaI1t8-Gd7TR8OtOLMBY80OR/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     image: "/images/FPGA.png",
//     videoLink: "https://www.dropbox.com/scl/fi/vhlcmp6r7bnla6b89ofi1/Video-Apr-05-2024-6-01-52-PM.mov?rlkey=fbsfeo3uxf8mczgyna85hpbtx&st=fqz5hpny&dl=0",
//     category: "Digital Logic Design", 
//     featured: true,
//   },

//  {
//     id: "fpga-Seg Adder-Display",
//     title: "FPGA BCD Adder & 7-Seg Display",
// description: "Designed and implemented a high-performance **2-Digit Binary-Coded Decimal (BCD) Adder** in **Verilog HDL** for the **NEXYS FPGA Board**. The system incorporates custom modules for **1-Digit BCD addition**, **code conversion**, and a **synchronous 8-digit 7-segment display driver** for visualization. The circuit is capable of generating a 3-digit output, including the **carry-out**, successfully demonstrating core principles of **digital arithmetic** and **hardware description language (HDL) programming**.",
// tags: ["Verilog HDL", "FPGA Implementation", "Digital Logic Design", "BCD Adder", "7-Segment Display", "Synchronous Design", "Digital Arithmetic", "Hardware Description Language", "NEXYS Board"],
// document:"https://docs.google.com/document/d/1n_7zZhVvS2S806R6cGDE04LpyUlQC2or/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     image: "/images/FPGASeg.jpg",
//     category: "Digital Logic Design", 
//       videoLink: "https://drive.google.com/file/d/1i0Y-kSlALN3RVqvh8jDL-gwWjj2DWOaT/view?usp=sharing",
//     featured: true,
//   },

//   {
//     id: "Control System",
//     title: "Closed loop Servo Position Control System",
// description: "Designed and implemented a **digital Proportional-Integral (PI) controller** for a **servo speed control system**, building upon an existing baseline. Developed the controller to meet stringent performance criteria, including an aggressive **0.033-second settling time** and **less than 5% overshoot**. Performed system **simulation (Simulink)**, **hardware implementation**, and extensive **comparative testing** to validate design. Successfully achieved a low **0.5% overshoot** and conducted **steady-state error analysis** for a unit-ramp input, validating theoretical concepts of **PID control** through practical application.",
// tags: ["Control Systems Engineering", "Digital Control", "PI Controller", "Simulink", "System Modeling", "Hardware Implementation", "Mechatronics", "Feedback Control", "Embedded Systems"],
//  image: "/images/control_system.png",
//     category: "Power & Control",
//     document:"https://docs.google.com/document/d/1qxdpTKDTznLBdNm9vrIanzdW8VT8R_tJ/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     featured: true,
//   },
//   {
//     id: "ac-induction-motor-driver",
//     title: "Three Phase AC Induction Motor Driver",
// description: "Designed, simulated, and analyzed a **Three-Phase Induction Motor Drive System** using **PSIM** for a high-voltage application. The architecture includes a **3-phase diode bridge rectifier**, **IGBT transistor inverter**, and a **PWM switch controller** for **AC-DC-AC conversion**. Performed **power flow analysis** and **transient simulations** to evaluate **3-phase current** and **voltage waveforms**, demonstrating the impact of **PWM frequency** on output quality and the controller's role in maintaining desired **torque and speed** under varying load conditions.",
// tags: ["Power Electronics", "Induction Motor Drive", "PSIM Simulation", "IGBT", "PWM Control", "AC-DC Conversion", "Control Systems", "Electrical Engineering"], 
// document: "https://drive.google.com/file/d/1XA91d0pC1vHTgDDDG0uowIBfpNz2CrVw/view?usp=sharing",
//     category: "Power & Control",
//     image: "/images/motordriver.png",
//     github: "https://github.com",
//     demo: "https://demo.com",
//     featured: false,
//   },
//   {
//     id: "cfoa-amplifier",
//   title: "High-Speed Current Feedback Op-Amp Design and Second-Order Active Filter Implementation",
// description: "Designed and analyzed a **Current Feedback Operational Amplifier (CFOA)**, demonstrating its **inherently faster slew-rate capability** and superior transient performance compared to Voltage Feedback Amplifiers. Implemented a **2nd Order Active Low Pass Filter**, investigating the effects of **frequency and Q scaling** by manipulating component values. Validated circuit performance through **LTSpice simulation**, achieving a stable **closed-loop gain of 2** and calculating a high **slew rate (SR) of 15.9 V/µs**. The project involved comprehensive **transient analysis**, **DC operating point analysis**, and **frequency response simulation**.",
// tags: ["Current Feedback Op Amp", "Analog Circuit Design", "Active Filter Design", "Slew Rate", "LTSpice", "Simulation and Analysis", "Analog Electronics", "Frequency Response"], 
// document: "https://docs.google.com/document/d/1mFoIWeQtzk_tjknTB0WSbNltBi_v-6ka/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     image: "/images/analog.png",
//     category: "Circuit Design",
//     featured: false,
//   },
//   {
//     id: "smps-design",
//     title: "Switch-Mode Power Supply Design",
// description: "Designed and implemented a high-efficiency **Switch-Mode Power Supply (SMPS)** to perform **AC-DC power conversion** (120V AC to 5V DC). The architecture utilizes a **buck converter** topology with the **LT1076 CT5 regulator** for robust **voltage regulation** and a **9F8-48 transformer** for initial voltage step-down. The final system achieved a stable 5V DC output with a high current capability (0.33A-1A) and **minimal ripple** (0.224% in simulation), validating the design through **LTSpice simulation** and **oscilloscope output** analysis.",
// tags: ["Power Electronics", "Switch-Mode Power Supply (SMPS)", "Buck Converter", "Voltage Regulation", "AC-DC Conversion", "Circuit Design", "LTSpice", "Analog Electronics", "System Simulation"], 
// document: "https://docs.google.com/document/d/1Ru_Rr_nkPKUi-IC-TuUeKs6Qbnp2WqaV/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     category: ["Circuit Design", "Power & Control"],
//     image: "/images/PowerSupply.png",
//     featured: false,
//   },
//   {
//     id: "patch-antenna",
//     title: "Patch Antenna Design",
//     description:
//       "Real-time FFT spectrum analyzer using STM32 and TFT display",
//     tags: ["DSP", "STM32", "C", "Embedded Systems"],
//     category: "Electromagnetics",
//     featured: false,
//   },
//   {
//     id: "servo-motor-driver",
//     title: "Device Driver & Embedded Servo Motor Controller",
// description: "Designed and implemented an **embedded system** using the **LPC1114 ARM Microcontroller** and **ARM Assembly Language** to generate **Pulse Width Modulation (PWM)** signals via hardware timers. Enabled precise **servo motor control** (0 to 180 degrees) via a **keypad interface** and **LCD feedback**. The system features **interrupt-driven input handling**, configuration of **multiple 32-bit timers** for high-precision PWM, and **on-chip SRAM memory management** for storing pulse parameters, demonstrating expertise in low-level control and **system integration**.",
// tags: ["Embedded Systems", "PWM Generation", "Servo Motor Control", "ARM Assembly", "Microcontroller (LPC1114)", "GPIO", "Timers/Interrupts", "Keil uVision", "Hardware-Software Integration", "Low-Level Programming"], 
// document: "https://docs.google.com/document/d/17hjXy1J5khpZpvNnJJpWWBRo5xuh4GKU/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     category: ["HW/Embedded System", "Power & Control"],
//     image: "/images/servoEmbedded.png",
//     featured: false,
//   },




// {
//     id: "lora-remote-control",
//     title: "Low-Power, Long-Range LoRa-Based Remote Control System for Motor Control",
// description: "Designed and implemented a full **embedded system** for a motorized boat using **LoRa** for long-range communication. The system pairs an **Arduino** transmitter with a **PIC24EP128GP202 microcontroller** receiver, which manages an **L298N motor controller** via **GPIO**. Engineered robust **digital communication protocols**, including implementation of **UART** and **AT commands** for module configuration, along with **parsing algorithms** and a **software circular buffer** to ensure **low-latency** and **data integrity** for reliable remote maneuvering.",
// tags: ["Embedded Systems", "LoRa", "PIC Microcontroller (MCU)", "Arduino", "PIC24", "Motor Control", "Digital Communications", "UART", "Hardware Design", "Wireless Communication"], 
// document: "https://docs.google.com/document/d/10XDYSTVLPRuqUzuuoBa65qyKJcJzsw19/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true",
//     category: ["Electromagnetics", "HW/Embedded System"],
//     image: "/images/CommSys.png",
//     featured: false,
//   },
//   {
//     id: "multi-sensor-rtos",
//     title: "Real-Time Embedded System for Sonar/GPS Mapping with FreeRTOS and Mutex Synchronization",
// description: "Designed and implemented a high-reliability **Real-Time Embedded System** using **FreeRTOS** on a **Microchip PIC24EP128GP202** microcontroller for an **RC boat with Sonar/GPS Mapping**. Architected and managed three concurrent, prioritized tasks (**Sonar, GPS, Recorder**) to perform **multi-sensor data integration** and logging. Implemented advanced **synchronization mechanisms** using **Mutexes** (including **Priority Inheritance**) to prevent **race conditions** on shared sensor data and utilized **critical sections** for time-sensitive I/O. Achieved deterministic, non-blocking operation using **preemptive scheduling** for efficient resource utilization.",
// tags: ["FreeRTOS", "Real-Time Operating System (RTOS)", "Embedded C", "Microcontroller (PIC24)", "Sensor Fusion", "Task Scheduling", "Mutex", "Priority Inheritance", "Concurrency", "Hardware-Software Interface"], 
// document: "https://drive.google.com/file/d/1tXycSOaX4-BnAuuK3v_NIIxVb3bTBDzU/view?usp=sharing",
//     category: ["HW/Embedded System", "Software (OOP)"],
//     image: "/images/rtos.png",
//     featured: false,
//   },
//   {
//     id: "sonar-sensor-circuit",
//     title: "Sonar Sensor Circuit Design",
// description: "Engineered and implemented a custom **40 kHz sonar transceiver** circuit for depth measurement, featuring a multi-stage **analog front-end** and high-voltage transmitter. The **Transmitter** utilizes an **H-bridge inverter** and a **1:10 variable impedance transformer** to generate a **40-volt peak-to-peak pulse**. The **Receiver** employs a **Low Noise Instrumentation Amplifier (INA129)** for initial high-gain amplification, followed by an **LM741-based active filter** and final **rectification stage** before **Analog-to-Digital Conversion (ADC)**, demonstrating robust **analog circuit design** and **signal conditioning** for environmental sensing.",
// tags: ["Analog Circuit Design", "Sonar Transceiver", "Signal Conditioning", "Instrumentation Amplifier", "H-Bridge Inverter", "Active Filter", "Low-Noise Design", "Power Electronics", "Transducer Interface", "Hardware Engineering"], 

//     category: "Circuit Design",
//     image: "/images/sonarCircuit.png",
// document: "https://drive.google.com/file/d/1QUJyTAowjudIeftRK-5p_jG3Jyz-LCYI/view?usp=sharing",
//     featured: false,
//   },
//  {
//     id: "Digital Electronics",
//   title: "Digital Electronics - Half Adder Design and Implementation using CMOS and SystemVerilog",
// description: "Designed and implemented a **Half Adder** circuit using **CD4007 CMOS transistors** and fundamental logic gates (**NAND, NOR, NOT**). The project involved comprehensive **hardware-level design** and **simulation (LTSpice)** for truth table verification, followed by **digital logic synthesis** using **Xilinx Vivado** and **SystemVerilog HDL**. Demonstrated expertise in **CMOS circuit design**, conversion of complex logic (XOR) to **universal gates**, and **Hardware Description Language (HDL) verification**.",
// tags: ["CMOS Transistors", "Digital Logic Design", "SystemVerilog", "Xilinx Vivado", "LTSpice", "Circuit Simulation", "Hardware Description Language (HDL)", "Universal Gates", "Hardware Implementation"],

//     category: "Circuit Design",
//     image: "/images/HA.png",
// document: "https://docs.google.com/document/d/1fHK8UWRuaKPc0ZGNkJoSnzqUAKiSiyy5/edit?usp=sharing&ouid=106981614339979825445&rtpof=true&sd=true" ,
//    featured: false,
//   },

//   {
//     id: "maze-sudoku-solver",
//     title: "Maze & Sudoku Algorithm Solver",
// description: "Developed a C program to solve mazes using a recursive **Depth First Search (DFS)** algorithm. Implemented custom **memory management** for the maze data structure and validated the pathfinding logic.",
// tags: ["C Programming", "Depth First Search (DFS)", "Algorithm Design", "Recursive Algorithms", "Data Structures", "Memory Management", "Pathfinding", "Problem Solving"],  
//     category: "Software (OOP)",
//     image: "/images/sudokuMaze.png",
//     github: "https://github.com/ashis7044",
//     featured: false,
//   },
//   {
//     id: "vlsi-floorplanning",
// title: "Slicing Tree Floorplanner for VLSI Physical Design",
// description: "Developed a C program to implement a **Slicing Tree** (binary tree structure) for VLSI floorplanning. Performed geometric optimizations using tree manipulations (rotate, recut, swap topology/modules) and generated the **Polish Expression** for module packing to minimize total chip area.",
// tags: ["VLSI Physical Design", "Floorplanning", "Slicing Tree", "Binary Tree", "Optimization Algorithms", "Data Structures", "C Programming", "Postfix Expression"],  

//     category: "Software (OOP)",
//     image: "/images/floorplan.png",
//     github: "https://github.com/ashis7044",
//     featured: false,
//   },
//   {
//     id: "geometric-shape-engine",
//     title: "C++ Object-Oriented Geometric Shape Analysis and Data Visualization Tool",
// description: "Developed a C++ **Object-Oriented** solution for geometric shape analysis, utilizing **Polymorphism** and **Template Programming** for unified calculations across 2D/3D shapes. Implemented **Operator Overloading** for shape manipulation and designed efficient algorithms for computing properties like area, volume, surface area, and centroids. The project emphasizes **software architecture**, **data structures**, and **algorithm design**, providing a modular and extensible framework for geometric computations with robust error handling and debugging techniques.",
// tags: ["C++", "Object-Oriented Programming (OOP)", "Polymorphism", "Template Programming", "Operator Overloading", "Geometric Modeling", "Algorithm Design", "Data Structures", "Software Architecture", "Debugging"], 

//     category: "Software (OOP)",
//     image: "/images/geometricengine.png",
//     github: "https://github.com/ashis7044",
//     featured: false,
//   },
//   {
//     id: "sparse-matrix",
//     title: "Sparse Matrix Operations and Fundamental Data Structures in C",
// description: "Developed a foundational **data structures and algorithms** implementation in **C** for efficient **sparse matrix operations**. Engineered a linked list of tuples data structure for **memory optimization**, implementing core matrix functions: **addition, multiplication, and file I/O**.",
// tags: ["C Programming", "Data Structures", "Algorithms", "Sparse Matrix", "Linked List", "Memory Optimization", "Scientific Computing", "Numerical Methods"], 

//     category: "Software (OOP)",
//     image: "/images/sparseMatrix.png",
//     github: "https://github.com/ashis7044",
//     featured: false,
//   },
  

//  {
//     id: "web",
//     title: "Hackathonn 1st Place - BooHoo Webapp",
//     description:
//       "Fullstack Web Application, Boo Hoo App buildt during Hackathon",
//     tags: ["Front end", "backend", "RestAPI", "web design", "JavaScript"],
//     category: "Web",
//     image: "/images/boo-hoo.png",
//     github: "https://github.com/ashis7044",
//     featured: false,
//   },

//   {
//     id: "test-automation-python",
//     title: "Device Test Automation using Python",
// description: "Designed and implemented a comprehensive **Python-based automated testing framework** for electromechanical product validation. The **unified Command Line Interface (CLI)** controls **five distinct lab instruments** (Oscilloscope, Power Supply, Flowmeter, Breathing Simulator, CPAP device). Achieved **high-speed, non-blocking data acquisition** by leveraging **multi-threading**. The architecture utilized **Object-Oriented Programming (OOP)** and implemented **SCPI-like commands** to manage devices and log data to **CSV files**.",
// tags: ["Python", "Test Automation", "Hardware-in-the-Loop (HIL)", "Data Acquisition", "Object-Oriented Programming (OOP)", "SCPI", "Multithreading", "CLI Development", "Firmware Communication"],  

//     category: "HW/Embedded System",
//     image: "/images/pythonAutomation.png",
//     github: "https://github.com/ashis7044",
//     featured: false,
//   },
//   {
//     id: "portfolio-website",
//     title: "Portfolio Website",
//     description:
//       "Modern portfolio built with Next.js 15, featuring animations and MDX blog",
//     tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//     category: "Web",
//     image: "/images/web.png",
//     github: "https://github.com/ashis7044",
//     demo: "https://demo.com",
//     featured: false,
//   },