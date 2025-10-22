import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layers3, Rocket } from "lucide-react";

const features = [
  {
    icon: <Layers3 className="w-12 h-12 text-accent" />,
    title: "3D Effects",
    description: "Engaging 3D effects on interactive elements to create a rich user experience that feels alive.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-accent" />,
    title: "Smooth Animations",
    description: "Silky-smooth animations and transitions that provide satisfying visual feedback without being distracting.",
  },
  {
    icon: <Code className="w-12 h-12 text-accent" />,
    title: "Interactive Components",
    description: "Fully interactive components that respond to user actions, making your web application more dynamic.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Core Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the powerful features that make Animated Spaces the next generation of web design.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} data-hover className="3d-hover bg-card/50 backdrop-blur-sm border-primary/50 transition-all duration-300 hover:border-accent/50 text-center">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
