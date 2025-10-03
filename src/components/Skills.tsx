import { Card } from "./ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 90 },
        { name: "iOS Development", level: 85 },
        { name: "Android Development", level: 85 }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "Firebase", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "Supabase", level: 80 }
      ]
    },
    {
      category: "State Management",
      skills: [
        { name: "Provider", level: 90 },
        { name: "Riverpod", level: 85 },
        { name: "Bloc", level: 88 },
        { name: "GetX", level: 82 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "CI/CD", level: 78 },
        { name: "Testing", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Comprehensive skill set for building exceptional Flutter applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
