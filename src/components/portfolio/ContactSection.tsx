import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone, 
  Send,
  Zap,
  MessageCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "psandesh0622@gmail.com",
    link: "mailto:psandesh0622@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9867917640",
    link: "tel:+9779867917640"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    link: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/SandeshPaudel24",
    username: "@SandeshPaudel24"
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sandesh-paudel-915b011a1/",
    username: "Sandesh Paudel"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Your MVP</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready for fast-paced work and rapid prototyping. Let's turn your idea into a validated product quickly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* MVP Principle Card */}
            <Card className="gradient-card shadow-soft border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">MVP Development Approach</CardTitle>
                    <CardDescription>
                      From concept to market in weeks, not months
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Rapid prototyping and iterative development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>User feedback integration and product validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Scalable architecture for future growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>Cross-platform solutions (Web, Mobile, Desktop)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-secondary/50 transition-smooth group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-card hover:bg-primary hover:text-primary-foreground transition-smooth group flex-1"
                    >
                      <IconComponent className="h-5 w-5" />
                      <div className="text-left">
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs opacity-75">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="space-y-6">
            {/* Quick WhatsApp Contact */}
            <Card className="gradient-glass shadow-floating border-primary/20">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto gradient-hero rounded-full flex items-center justify-center shadow-glow">
                    <MessageCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Quick Connect</h3>
                    <p className="text-muted-foreground">Get instant response on WhatsApp</p>
                  </div>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group shadow-large hover:shadow-glow transition-spring"
                    onClick={() => window.open('https://wa.me/9779867917640?text=Hi%20Sandesh!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20opportunity.', '_blank')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-smooth" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Contact Form */}
            <Card className="gradient-card shadow-floating">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your MVP Project</CardTitle>
                <CardDescription>
                  Tell me about your idea and let's discuss how we can build your MVP together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const project = formData.get('project');
                  const timeline = formData.get('timeline');
                  const message = formData.get('message');
                  
                  const whatsappMessage = `Hi Sandesh! I'm ${name} (${email}). I'd like to discuss a ${project} project with ${timeline} timeline. Details: ${message}`;
                  window.open(`https://wa.me/9779867917640?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" className="shadow-soft focus:shadow-medium transition-smooth" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" className="shadow-soft focus:shadow-medium transition-smooth" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input id="project" name="project" placeholder="e.g., E-commerce MVP, Mobile App, SaaS Platform" className="shadow-soft focus:shadow-medium transition-smooth" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input id="timeline" name="timeline" placeholder="e.g., 4-6 weeks" className="shadow-soft focus:shadow-medium transition-smooth" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Describe your MVP idea, target users, key features, and any specific requirements..."
                      className="min-h-[120px] shadow-soft focus:shadow-medium transition-smooth"
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full group shadow-large hover:shadow-glow transition-spring">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                    Send via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;