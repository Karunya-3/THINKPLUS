import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target } from "lucide-react";

const features = [
  {
    icon: <Target className="w-12 h-12 text-accent" />,
    title: "CAT Preparation",
    description: "Comprehensive CAT coaching with expert faculty from IIMs. Master quantitative aptitude, verbal ability, data interpretation, and logical reasoning with our proven methodology.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-accent" />,
    title: "IPMAT Programs",
    description: "Specialized IPMAT preparation designed for 5-year integrated management programs at IIMs. Get personalized guidance and strategic learning approaches.",
  },
  {
    icon: <Users className="w-12 h-12 text-accent" />,
    title: "CLAT Coaching",
    description: "Expert CLAT preparation with comprehensive study material and mock tests. Excel in legal aptitude, logical reasoning, and general knowledge sections.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Programs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your career with ThinkPlus Education's expert-led programs. Get mentored by IIM graduates and industry experts to ace your entrance exams.
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