"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Copy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { use } from "react";

// This is a placeholder - in production, you'd fetch content from MDX files
const samplePost = {
  title: "Getting Started with FPGA Development",
  date: "2025-01-15",
  readTime: "8 min read",
  tags: ["FPGA", "Verilog", "Tutorial"],
  author: "Your Name",
};

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <Section>
        <Container size="sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {samplePost.tags.map((tag) => (
                <Badge key={tag} variant="gradient">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {samplePost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  {samplePost.author[0]}
                </div>
                <span className="font-medium text-foreground">{samplePost.author}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(samplePost.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {samplePost.readTime}
              </span>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-2 pb-8 border-b">
              <span className="text-sm text-muted-foreground">Share:</span>
              <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(samplePost.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pt-0">
        <Container size="sm">
          <motion.article
            className="prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Sample content - this would come from MDX */}
            <p className="lead text-xl text-muted-foreground">
              Field Programmable Gate Arrays (FPGAs) are incredible devices that allow 
              you to implement custom digital circuits. In this guide, we&apos;ll cover 
              everything you need to get started.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is an FPGA?</h2>
            <p className="text-muted-foreground leading-relaxed">
              An FPGA is an integrated circuit designed to be configured after manufacturing. 
              Unlike processors that execute software instructions, FPGAs can be programmed 
              to implement any digital circuit, making them incredibly versatile for 
              applications requiring high performance or custom hardware functionality.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
            <p className="text-muted-foreground leading-relaxed">
              To begin your FPGA journey, you&apos;ll need:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>An FPGA development board (Xilinx or Intel/Altera)</li>
              <li>Vendor development software (Vivado, Quartus, etc.)</li>
              <li>Basic understanding of digital logic</li>
              <li>Knowledge of a hardware description language (Verilog or VHDL)</li>
            </ul>

            <Card className="my-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">💡 Pro Tip</h3>
                <p className="text-muted-foreground text-sm">
                  Start with a simple project like an LED blinker before moving to more 
                  complex designs. This helps you understand the complete design flow 
                  from coding to synthesis to implementation.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sample Verilog Code</h2>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
              <code>{`module led_blink (
    input  wire clk,
    input  wire rst_n,
    output reg  led
);
    reg [25:0] counter;
    
    always @(posedge clk or negedge rst_n) begin
        if (!rst_n) begin
            counter <= 0;
            led <= 0;
        end else begin
            counter <= counter + 1;
            if (counter == 0)
                led <= ~led;
        end
    end
endmodule`}</code>
            </pre>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="text-muted-foreground leading-relaxed">
              FPGAs open up a world of possibilities for custom hardware design. 
              Whether you&apos;re interested in signal processing, machine learning 
              acceleration, or embedded systems, FPGAs provide a powerful platform 
              for innovation.
            </p>
          </motion.article>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t"
          >
            <Card glass>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                    {samplePost.author[0]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{samplePost.author}</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Electrical & Computer Engineering graduate passionate about 
                      FPGAs, embedded systems, and making complex topics accessible.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/about">Learn more about me</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
