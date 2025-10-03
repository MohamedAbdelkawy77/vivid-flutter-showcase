import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6 hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6 hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6 hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-destructive animate-pulse" />
            <span>using Flutter</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Flutter Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
