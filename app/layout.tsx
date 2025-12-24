import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";
import { inter } from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Web Tech Portfolio",
    default: "Web Tech Class Portfolio",
  },
  description:
    "A simple showcase of projects created during a Web Technology class. This site displays class assignments, practice projects, and learning progress in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased styled-scrollbar`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster richColors closeButton />
          <div className="w-full min-h-screen flex flex-col relative">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
