"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ashispandey333@gmail.com",
    href: "mailto:ashispandey333@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/asp-77/",
    href: "https://www.linkedin.com/in/asp-77/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ashis7044",
    href: "https://github.com/ashis7044",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tokiwadaira, Matsudo, Chiba, Japan",
    href: null,
  },
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setErrorMessage(
        "Failed to send message. Please try again or reach out via email directly."
      );
      // Clear error after 5 seconds
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              I&apos;m currently open to new opportunities and collaborations. 
              Whether you have a question, a project idea, or just want to say hi, 
              I&apos;d love to hear from you!
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="pt-0">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card glass>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. I&apos;ll get back to you soon!
                      </p>
                    </motion.div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p className="text-sm">{errorMessage}</p>
                        </motion.div>
                      )}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. 
                  I typically respond within 24-48 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Card hover className="group">
                      <CardContent className="p-4">
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="flex items-center gap-4"
                          >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {item.label}
                              </p>
                              <p className="font-medium group-hover:text-primary transition-colors">
                                {item.value}
                              </p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                {item.label}
                              </p>
                              <p className="font-medium">{item.value}</p>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional CTA */}
              <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Looking for my resume?
                  </h3>
                  <p className="text-white/80 mb-4">
                    Download my latest resume to learn more about my 
                    qualifications and experience.
                  </p>
                  <Button
                    variant="outline"
                    className="border-white text-white bg-transparent hover:bg-white hover:text-blue-600"
                    asChild
                  >
                    <a href="/documents/AshisPandey-Resume.zip" download>
                      Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
