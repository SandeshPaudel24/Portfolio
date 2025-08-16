import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMobile from "@/assets/project-mobile.jpg";

const projects = [
  {
    title: "Swiss Timepieces Nepal",
    description: "Built virtual showroom MVP with inventory/sales modules, ensuring quick launch and prompt customer feedback cycles.",
    role: "Full Stack & Backend Developer",
    tech: ["Python", "Django", "PostgreSQL", "JavaScript", "SSL"],
    outcome: "Delivered core ERP features enabling rapid deployment for market validation and iterative scaling.",
    image: projectDashboard,
    link: "https://swisstimepiecesnepal.com/",
    github: "https://github.com/SandeshPaudel24"
  },
  {
    title: "BYD Virtual Showroom & ERP",
    description: "Delivered core ERP features with backend development and server operations for automotive showroom management.",
    role: "Backend Developer & Server Operations",
    tech: ["Python", "Odoo", "PostgreSQL", "Server Management", "API Integration"],
    outcome: "Enabled rapid deployment for market validation with iterative scaling capabilities.",
    image: projectMobile,
    link: "#",
    github: "https://github.com/SandeshPaudel24"
  },
  {
    title: "HulasDepo E-commerce Platform",
    description: "Deployed secure MVP e-commerce platform with SSL implementation, supporting fast product launch and customer feedback.",
    role: "Backend & Server Deployment",
    tech: ["Python", "Django", "PostgreSQL", "SSL", "Server Operations"],
    outcome: "Achieved secure, scalable deployment enabling immediate market entry and user feedback collection.",
    image: projectDashboard,
    link: "https://hulasdepot.com/",
    github: "https://github.com/SandeshPaudel24"
  },
  {
    title: "Petrol Station Management System",
    description: "Designed MVP for inventory, sales, and billing management, iteratively expanded based on station operational needs.",
    role: "Python Full Stack Developer",
    tech: ["Python", "Django", "PostgreSQL", "Jupyter", "Data Analytics"],
    outcome: "Shipped basic MVP then grew features via agile sprints based on real-world usage.",
    image: projectMobile,
    link: "#",
    github: "https://github.com/SandeshPaudel24"
  },
  {
    title: "Mobile App MVPs (Flutter)",
    description: "Multiple mobile applications including Baltra Nepal, 33west Sky Bar apps, and personal projects like Hangman game and note-taking apps.",
    role: "Flutter Full Stack Developer",
    tech: ["Flutter", "Dart", "Firebase", "Kotlin", "Java"],
    outcome: "Created and launched mobile app MVPs with core features first, focused on immediate user needs.",
    image: projectMobile,
    link: "#",
    github: "https://github.com/SandeshPaudel24"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MVP Project Highlights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing live projects built with MVP methodology - emphasizing initial versions, 
            fast delivery, and iterative growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-floating transition-spring hover:-translate-y-3 gradient-card hover-glow overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover transition-spring group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-spring transform translate-y-2 group-hover:translate-y-0">
                  <Button variant="secondary" size="sm" className="shadow-medium hover:shadow-glow transition-spring" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" className="shadow-medium hover:shadow-glow transition-spring" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
                {/* Project Status Indicator */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full shadow-medium">
                    Live Project
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {project.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm">MVP Focus:</h4>
                  <p className="text-sm text-muted-foreground">{project.outcome}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;