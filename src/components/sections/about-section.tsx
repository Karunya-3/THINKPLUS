import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import data from '@/lib/placeholder-images.json';

export function AboutSection() {
  const aboutImage = data.placeholderImages.find(p => p.id === "about-image");

  return (
    <section id="about" className="py-20 md:py-32 bg-primary/10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Crafted for Modernity</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Animated Spaces is not just a template; it's a foundation for building immersive web experiences. We focus on performance, aesthetics, and user engagement to deliver top-tier digital products.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-3" />
                <span>Responsive and Mobile-First</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-3" />
                <span>Optimized for Performance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-6 w-6 text-accent mr-3" />
                <span>Easily Customizable</span>
              </li>
            </ul>
            <Button size="lg" className="mt-8 group 3d-hover">Contact Us</Button>
          </div>
          <div data-hover className="3d-hover rounded-lg overflow-hidden [transform-style:preserve-3d] shadow-2xl shadow-accent/10">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
