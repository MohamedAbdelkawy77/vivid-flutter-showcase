import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" style={{ animationDuration: "8s" }} />
      
      {/* Background Photo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src={profileImage}
          alt=""
          className="w-[600px] h-[600px] object-cover rounded-full blur-sm"
        />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-glow" />
            <img
              src={profileImage}
              alt="Mohamed Abdelkawy - Flutter Developer"
              loading="lazy"
              className="relative rounded-full w-32 h-32 md:w-40 md:h-40 object-cover shadow-2xl ring-4 ring-primary/20 hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm Mohamed
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-glow">
                Flutter Developer
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              I love building beautiful mobile apps with Flutter! 
              Let's create something amazing together for iOS and Android.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
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
            
            <div className="flex gap-4 pt-4 justify-center">
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
                href="https://www.linkedin.com/in/mohamed-abdelkawy-8b42862b6" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
