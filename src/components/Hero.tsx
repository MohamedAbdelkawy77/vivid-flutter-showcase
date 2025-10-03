import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" style={{ animationDuration: "8s" }} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Flutter Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm Mohamed 👋
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-glow">
                Flutter Developer
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              I love building beautiful mobile apps with Flutter! 
              Let's create something amazing together for iOS and Android.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="group relative overflow-hidden"
                onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/MohamedAbdelkawy77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-20 animate-glow" />
              <img
                src={profileImage}
                alt="Mohamed Abdelkawy - Flutter Developer"
                loading="lazy"
                className="relative rounded-2xl shadow-2xl w-full max-w-xs mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
