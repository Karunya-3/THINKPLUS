"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Users, Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AuthPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get intelligent suggestions and personalized learning paths"
    },
    {
      icon: Sparkles,
      title: "Smart Organization",
      description: "Automatically categorize and tag your thoughts"
    },
    {
      icon: Users,
      title: "Collaborate",
      description: "Share and work together with your team"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <Link href="/" className="inline-flex items-center space-x-2 mb-8">
            <BookOpen className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">Think Plus</span>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Think Plus
            </span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
            Organize your thoughts, boost your creativity, and collaborate seamlessly.
            Join thousands of thinkers already using our platform.
          </p>
        </motion.div>

        <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-2">
          {/* Auth Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <Card className="border-0 shadow-2xl bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold">Get Started</h2>
                    <p className="text-muted-foreground mt-2">
                      Join Think Plus today and transform how you work
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link href="/auth/signup" className="block">
                      <Button size="lg" className="w-full 3d-hover text-lg py-6">
                        Create Account
                        <Sparkles className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background/80 px-2 text-muted-foreground">
                          Already have an account?
                        </span>
                      </div>
                    </div>

                    <Link href="/auth/signin" className="block">
                      <Button variant="outline" size="lg" className="w-full text-lg py-6">
                        Sign In
                      </Button>
                    </Link>
                  </div>

                  <p className="text-center text-sm text-muted-foreground">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="rounded-full bg-accent/10 p-3">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}