import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingDock } from "@/components/ui/floating-dock";
import "./globals.css";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Szevasz - Personal Website",
  description: "Welcome to my personal website",
};

export default function RootLayout(
  {
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <Image src="/logo-dark.png" alt="Aceternity Logo" width={20} height={20} />
      ),
      href: "https://ui.aceternity.com/",
    },
    
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Szevasz",
    },
  ]
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="font-bold text-xl text-white">Szevasz</a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-500 hover:text-gray-200">About</a>
                <a href="#projects" className="text-gray-500 hover:text-gray-200">Projects</a>
                <a href="#contact" className="text-gray-500 hover:text-gray-200">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© 2024 Szevasz. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <FloatingDock
                  mobileClassName="translate-y-20" // only for demo, remove for production
                  items={links}
                />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
