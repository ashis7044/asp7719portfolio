"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  featured?: boolean;
}

// This would typically come from your MDX files
const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-fpga",
    title: "Getting Started with FPGA Development",
    excerpt:
      "A comprehensive guide to starting your journey with FPGAs, covering tools, resources, and first projects for beginners.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["FPGA", "Verilog", "Tutorial"],
    featured: true,
  },
  {
    slug: "embedded-systems-best-practices",
    title: "Best Practices for Embedded Systems Development",
    excerpt:
      "Learn the essential practices for writing clean, maintainable, and efficient embedded code.",
    date: "2025-01-08",
    readTime: "6 min read",
    tags: ["Embedded", "C/C++", "Best Practices"],
    featured: true,
  },
  {
    slug: "iot-project-architecture",
    title: "Designing IoT Project Architecture",
    excerpt:
      "How to structure your IoT projects for scalability, security, and maintainability.",
    date: "2024-12-20",
    readTime: "10 min read",
    tags: ["IoT", "Architecture", "Design"],
  },
  {
    slug: "pcb-design-tips",
    title: "PCB Design Tips for Beginners",
    excerpt:
      "Essential tips and common mistakes to avoid when designing your first PCB.",
    date: "2024-12-10",
    readTime: "7 min read",
    tags: ["PCB", "Hardware", "Tutorial"],
  },
  {
    slug: "senior-design-journey",
    title: "My Senior Design Project Journey",
    excerpt:
      "Reflections on leading a team through the senior design project experience.",
    date: "2024-11-28",
    readTime: "5 min read",
    tags: ["Personal", "Project", "Experience"],
  },
];

const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

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
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Thoughts, tutorials, and insights on electrical engineering, 
              embedded systems, and software development
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Tags */}
      <Section className="pt-0">
        <Container>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
            >
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                <span className="gradient-text">Featured</span> Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <Card hover glass className="h-full overflow-hidden group">
                        {/* Image placeholder */}
                        <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <span className="text-5xl">📝</span>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                              Read more
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {selectedTag ? (
                <>
                  Articles tagged with{" "}
                  <span className="gradient-text">{selectedTag}</span>
                </>
              ) : (
                <>
                  All <span className="gradient-text">Articles</span>
                </>
              )}
            </h2>
            <div className="space-y-4">
              {(selectedTag ? filteredPosts : regularPosts).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card hover className="group">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </Container>
      </Section>
    </div>
  );
}
