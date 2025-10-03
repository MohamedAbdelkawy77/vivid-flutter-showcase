import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Your City, Country",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                <info.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
              <a 
                href={info.link}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {info.value}
              </a>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 md:p-12 max-w-2xl mx-auto animate-fade-in-up">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input 
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                placeholder="Project inquiry"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <Button size="lg" className="w-full group relative overflow-hidden">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
