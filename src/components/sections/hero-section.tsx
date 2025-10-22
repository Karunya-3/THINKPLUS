import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="container z-10">
        <div className="max-w-4xl mx-auto">
          <div data-hover className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm text-accent mb-4 border border-accent/20">
            Welcome to ThinkPlus Education
          </div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            ThinkPlus Education
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Your gateway to premier management and law education. Expert-led CAT, IPMAT, and CLAT preparation with proven results and personalized mentoring.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="group 3d-hover">
              Explore Programs
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