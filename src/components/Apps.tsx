import { Github, Smartphone, Database, Code2, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export const Apps = () => {
  const projects = [
    {
      title: "Bookly App",
      type: "Flutter Mobile Application",
      description: "A modern Flutter app for browsing and discovering books with a clean and responsive UI.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
      features: [
        "Browse latest and trending books",
        "Detailed book information (cover, description, rating, author)",
        "MVVM architecture for maintainable and scalable code",
        "Offline caching for better performance",
        "Responsive design across all screen sizes"
      ],
      technologies: ["Flutter", "Dart", "MVVM", "Firebase", "Hive"],
      github: "https://github.com/MohamedAbdelkawy77/BooklyApp"
    },
    {
      title: "FilMovie App",
      type: "Flutter Mobile Application",
      description: "A movie discovery app built with Flutter using Clean Architecture principles.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      features: [
        "Discover popular and trending movies",
        "REST API integration with offline caching",
        "Firebase Authentication and Firestore for user favorites",
        "Smooth performance and elegant UI/UX"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "Hive", "REST APIs"],
      github: "https://github.com/MohamedAbdelkawy77/FilMovieApp"
    }
  ];

  return (
    <section id="apps" className="py-20 px-6 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Mobile applications crafted with Flutter and modern architecture patterns
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary/90 hover:bg-primary">
                  {project.type}
                </Badge>
              </div>
              
              <div className="p-6 space-y-5">
                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Layers className="h-4 w-4" />
                    Key Features
                  </div>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Code2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Database className="h-4 w-4" />
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <Button 
                  className="w-full gap-2 group/btn" 
                  asChild
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="gap-2 group"
            asChild
          >
            <a 
              href="https://github.com/MohamedAbdelkawy77?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
