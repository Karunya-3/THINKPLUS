import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import data from '@/lib/placeholder-images.json';

export function AboutSection() {
  const aboutImage = data.placeholderImages.find(p => p.id === "about-image");

  return (
    <section id="about" className="py-20 md:py-32 bg-primary/10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Our Story: The ThinkPlus Journey
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                In the 7 years of training students for India's toughest management entrance tests, a set of questions haunted me every single instance: Why is the success rate meager? Why are we unable to place students in their dream colleges? Is it our inability or that of the students themselves?
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We concluded that every student deserves undivided attention and care for this to end. ThinkPlus was ideated in Room No -7224 of the hostel block in IIM Udaipur.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                At ThinkPlus, we bring in the right people and technology to meet the unique individual needs of every student.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Vision:</span>
                  <span className="text-muted-foreground ml-2">At ThinkPlus Education, we envision to build a self-sustaining learning eco-system for anyone and everyone.</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Mission:</span>
                  <span className="text-muted-foreground ml-2">At ThinkPlus Education, we offer specialized courses and personal mentoring to enhance students' aptitude, enabling them to dream, work and achieve.</span>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-6 group 3d-hover">
              Contact Us
            </Button>
          </div>
          
          <div data-hover className="3d-hover rounded-2xl overflow-hidden [transform-style:preserve-3d] shadow-2xl shadow-accent/10">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}