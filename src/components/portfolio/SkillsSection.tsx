import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Cloud,
  GitBranch,
  Layers
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    description: "Core technologies for MVP development",
    icon: Code2,
    skills: ["Python", "Flutter", "Next.js", "Node.js", "JavaScript", "Dart", "Kotlin", "Java"],
    color: "tech-blue"
  },
  {
    title: "Backend & ERP Systems",
    description: "Scalable backend and enterprise solutions",
    icon: Database,
    skills: ["Django", "Odoo", "RESTful APIs", "Firebase", "API Integration", "Server Management"],
    color: "tech-cyan"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile solutions",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Kotlin", "Java", "Firebase", "Mobile UI/UX"],
    color: "tech-purple"
  },
  {
    title: "Data Management",
    description: "Database and data solutions",
    icon: Layers,
    skills: ["PostgreSQL", "MongoDB", "Firebase Firestore", "SQL", "Database Design"],
    color: "success-green"
  },
  {
    title: "Data Analytics & BI",
    description: "Insights and business intelligence",
    icon: BarChart3,
    skills: ["Jupyter", "Tableau", "Power BI", "Hadoop", "RapidMiner", "YED"],
    color: "tech-blue"
  },
  {
    title: "DevOps & Tools",
    description: "Development and deployment tools",
    icon: Cloud,
    skills: ["Git", "GitHub", "SSL Deployment", "Figma", "Server Operations"],
    color: "tech-cyan"
  }
];

const mvpMethodology = [
  "Agile MVP Delivery",
  "User Feedback Loops",
  "Rapid Iteration Cycles",
  "Market Validation",
  "Scalable Architecture",
  "Performance Optimization"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MVP Skills & Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise focused on rapid MVP development and iterative product delivery
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-smooth hover:-translate-y-1 gradient-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* MVP Methodology */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-soft">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full gradient-hero flex items-center justify-center mb-4">
                <GitBranch className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">MVP-Centric Approach</CardTitle>
              <CardDescription className="text-lg">
                Proven methodology for rapid product development and market validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mvpMethodology.map((method, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;