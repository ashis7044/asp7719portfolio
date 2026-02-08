import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Portfolio | Electrical & Computer Engineering Graduate",
  description: "Personal portfolio showcasing projects, experience, and skills in electrical and computer engineering. Open to opportunities in hardware design, embedded systems, and software development.",
  keywords: ["electrical engineering", "computer engineering", "portfolio", "ECE", "embedded systems", "hardware design", "software development"],
  authors: [{ name: "ECE Graduate" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Portfolio | ECE Graduate",
    description: "Personal portfolio showcasing projects, experience, and skills in electrical and computer engineering.",
    siteName: "ECE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | ECE Graduate",
    description: "Personal portfolio showcasing projects, experience, and skills in electrical and computer engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen flex flex-col noise">
            <ScrollProgress />
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
