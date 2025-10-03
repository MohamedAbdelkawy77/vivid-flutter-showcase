import { Code2, Smartphone, Zap } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable Flutter applications"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Building beautiful apps for iOS and Android"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for smooth 60fps experiences"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Flutter developer with expertise in creating beautiful, 
              performant mobile applications. With a deep understanding of Dart and the 
              Flutter framework, I transform ideas into reality.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines clean architecture, smooth animations, and pixel-perfect 
              designs to deliver exceptional user experiences. I stay updated with the latest 
              Flutter trends and best practices to ensure my applications are modern and efficient.
            </p>
            
            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                {["Flutter", "Dart", "Firebase", "REST APIs", "State Management", "UI/UX"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
