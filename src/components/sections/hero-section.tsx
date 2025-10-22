import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="container z-10">
        <div className="max-w-4xl mx-auto">
          <div data-hover className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-accent mb-4 border border-accent/20">
            Welcome to the Future of Web
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Animated Spaces
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Experience a new dimension of web interaction. We craft stunning, animated, and interactive digital spaces that captivate and engage.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="group 3d-hover">
              Explore Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="3d-hover">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
