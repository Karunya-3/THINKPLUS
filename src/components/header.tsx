"use client";

import Link from "next/link";
import { Menu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Left section */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="hidden font-bold sm:inline-block">
              Think Plus
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right section */}
        <div className="flex flex-1 items-center justify-end">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-background">
              <Link href="/" className="mb-8 flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-accent" />
                <span className="font-bold">Think Plus</span>
              </Link>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg text-foreground/80 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link href="/auth/signup" className="mt-6">
                <Button className="w-full">Get Started</Button>
              </Link>
            </SheetContent>
          </Sheet>

          {/* Desktop Get Started */}
          <div className="hidden md:flex">
            <Link href="/auth/signup">
              <Button className="3d-hover">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
