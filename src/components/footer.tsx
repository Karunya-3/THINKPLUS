import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8">
      <div className="container max-w-screen-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-accent" />
          <p className="text-sm font-semibold">Animated Spaces</p>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Animated Spaces. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
