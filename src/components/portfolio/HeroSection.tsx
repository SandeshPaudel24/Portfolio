import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import self from '@/assets/self.jpeg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${self})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-glass backdrop-blur-md opacity-50" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-tech-cyan/10 blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-tech-purple/10 blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-tech-blue via-tech-cyan to-tech-purple rounded-full blur opacity-75 group-hover:opacity-100 transition-smooth animate-glow" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-floating mx-auto animate-float bg-background p-1">
              <img 
                src={self} 
                alt="Sandesh Paudel - Professional profile photo" 
                className="w-full h-full object-cover rounded-full transition-spring hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-hero bg-clip-text text-transparent">
              Sandesh Paudel
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Full Stack Developer  • ERP Solutions • Data Analytics Learner
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-500  max-w-3xl mx-auto leading-relaxed ">
            Expert in rapidly developing and deploying MVPs using Flutter, Next.js, Python, and Node.js. 
            Proven in ERP (Odoo), mobile/web MVP launches, and analytics. Empowering startups and businesses 
            to validate ideas, gather early feedback, and scale efficiently.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="group shadow-large hover:shadow-glow transition-spring">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group hover-float shadow-medium"
              onClick={() => window.open('https://wa.me/9779867917640?text=Hi%20Sandesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-smooth" />
              WhatsApp Me
            </Button>
          </div> */}

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com/SandeshPaudel24" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full gradient-glass flex items-center justify-center text-muted-foreground hover:text-primary transition-spring hover-float shadow-medium hover:shadow-glow"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sandesh-paudel-915b011a1/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full gradient-glass flex items-center justify-center text-muted-foreground hover:text-primary transition-spring hover-float shadow-medium hover:shadow-glow"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:psandesh0622@gmail.com"
              className="w-12 h-12 rounded-full gradient-glass flex items-center justify-center text-muted-foreground hover:text-primary transition-spring hover-float shadow-medium hover:shadow-glow"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
  {/* Outer rounded border */}
  <div className="w-6 h-12 border-2 border-current rounded-full flex justify-center items-start p-1">
    {/* Animated inner dot */}
    <div className="w-2 h-2 bg-primary rounded-full animate-bounce-slow" />
  </div>
  {/* "Scroll" text */}
  <span className="text-xs text-muted-foreground uppercase tracking-widest animate-pulse">
    Scroll
  </span>
</div>

    </section>
  );
};

export default HeroSection;
