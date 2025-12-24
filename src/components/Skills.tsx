import { Card } from "./ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Dart", "Solidity", "C++", "Java"]
    },
    {
      category: "Mobile Development",
      skills: ["Flutter", "Bloc/Cubit", "Provider", "Clean Architecture", "MVVM", "Responsive UI/UX", "Firebase (Auth, Firestore)", "REST APIs", "Hive", "Google Maps"]
    },
    {
      category: "Blockchain",
      skills: ["Smart Contracts (ERC-20)", "Ethereum", "Web3.js", "MetaMask", "Remix IDE"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"]
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
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
