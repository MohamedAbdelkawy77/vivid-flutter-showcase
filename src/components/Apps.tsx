import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Apps = () => {
  const projects = [
    {
      title: "E-Commerce App",
      description: "Full-featured shopping app with payment integration, product catalog, and user authentication.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Health and fitness tracking app with workout plans, progress monitoring, and social features.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      tags: ["Flutter", "HealthKit", "Charts"],
      github: "#",
      demo: "#"
    },
    {
      title: "Social Media App",
      description: "Modern social networking platform with real-time messaging, stories, and content sharing.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "WebRTC"],
      github: "#",
      demo: "#"
    },
    {
      title: "Food Delivery App",
      description: "Restaurant ordering and delivery platform with real-time tracking and payment processing.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop",
      tags: ["Flutter", "Maps API", "Payment"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather App",
      description: "Beautiful weather forecast app with detailed metrics, alerts, and location-based predictions.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      tags: ["Flutter", "Weather API", "Animations"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Manager",
      description: "Productivity app with task scheduling, reminders, team collaboration, and project tracking.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      tags: ["Flutter", "Notifications", "Cloud Sync"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="apps" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Apps
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Showcase of mobile applications I've built with Flutter
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-2">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
