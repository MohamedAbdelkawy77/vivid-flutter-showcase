import { Code2, Smartphone, Zap, Layers, Database, Paintbrush, GitBranch, Rocket } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  const expertiseAreas = [
    {
      icon: Paintbrush,
      title: "Advanced UI Development",
      description: "Responsive designs and pixel-perfect layouts for all screen sizes"
    },
    {
      icon: Layers,
      title: "State Management",
      description: "Expert in Bloc/Cubit and Provider for scalable app architecture"
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Firebase Auth, Firestore, REST APIs, and offline-first with Hive"
    },
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "MVVM patterns for maintainable and testable codebases"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Smooth animations and optimized rendering for 60fps experiences"
    },
    {
      icon: GitBranch,
      title: "Professional Workflow",
      description: "Git-based workflows and clean, organized project structures"
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
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in-up text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Smartphone className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Flutter Developer</span>
            <Rocket className="h-8 w-8 text-primary" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I am a <span className="text-foreground font-semibold">Flutter Developer</span> with a strong passion for building 
            high-quality, scalable, and performance-oriented mobile applications. I specialize in developing 
            cross-platform apps using <span className="text-primary font-semibold">Flutter and Dart</span>, with deep experience 
            in <span className="text-foreground font-semibold">Clean Architecture</span> and <span className="text-foreground font-semibold">MVVM</span> for 
            writing maintainable and testable code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I focus on delivering apps that are not only functional, but also <span className="text-foreground font-medium">clean in architecture</span>, 
            <span className="text-foreground font-medium"> elegant in UI</span>, and <span className="text-foreground font-medium">smooth in user experience</span>. 
            My goal is to continuously improve my Flutter skills and build real-world applications that follow industry best practices.
          </p>
        </div>
        
        {/* Expertise Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            What I Bring to the Table
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg shrink-0">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Technologies */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Flutter", 
              "Dart", 
              "Bloc/Cubit", 
              "Provider", 
              "Firebase", 
              "REST APIs", 
              "Hive", 
              "Clean Architecture", 
              "MVVM",
              "Git"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
