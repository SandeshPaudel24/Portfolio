import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Codesc Nepal",
    role: "Full Stack Developer",
    period: "02/2024 - 02/2025",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    mvpContributions: [
      "Delivered and maintained MVPs for BYD, Baltra Nepal, 33west Sky Bar, Swiss Timepieces, Kajaria Nepal",
      "Integrated IMS & CRM MVPs with rapid deployment cycles",
      "Handled backend development and server operations for BYD ERP system",
      "Achieved seamless multi-client project management with iterative delivery",
      "Create Frontend using NextJS, React and Backend using Python ",
    ],
    technologies: ["Python", "Flutter", "Django", "NextJS", "PostgreSQL", "Server Management"]
  },
  {
    company: "Omisticstech",
    role: "Data Analyst (Remote)",
    period: "2024 - Present",
    location: "Remote",
    type: "Contract",
    mvpContributions: [
      "Contributed data analysis for 30+ MVP projects using advanced analytics stack",
      "Provided insights for rapid product validation and iteration cycles",
      "Developed analytics dashboards for MVP performance tracking",
      "Applied machine learning techniques for user behavior analysis"
    ],
    technologies: ["Python", "Jupyter", "Tableau", "Power BI", "Hadoop", "RapidMiner"]
  },
  {
    company: "CRMIC",
    role: "Python Developer & Odoo Specialist",
    period: "01/2022 - 05/2023",
    location: "Kathmandu, Nepal",
    type: "Part-time",
    mvpContributions: [
      "Built and iterated MVPs for education management systems",
      "Developed petrol station management system MVP with iterative improvements",
      "Created EMS & CRM modules in Odoo focusing on core functionality first",
      "Shipped basic MVPs then expanded features via agile development cycles"
    ],
    technologies: ["Python", "Odoo", "PostgreSQL", "Django", "Data Analytics"]
  },
  {
    company: "Self-Employed",
    role: "Full Stack MVP Developer",
    period: "11/2021 - 06/2023",
    location: "Kathmandu, Nepal",
    type: "Freelance",
    mvpContributions: [
      "Developed and launched personal app MVPs (Hangman game, Auth systems, Notes app)",
      "Focused on minimal core features first with rapid user feedback integration",
      "Applied MVP methodology to validate app concepts before full development",
      "Built reusable Flutter components for faster future MVP development"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Python", "JavaScript"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">MVP Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience focused on MVP development, rapid iteration, and product validation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background md:transform md:-translate-x-1.5 z-10" />
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="group hover:shadow-medium transition-smooth gradient-card">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                            {exp.role}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-foreground">
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* MVP Contributions */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Key MVP Contributions:
                        </h4>
                        <ul className="space-y-2">
                          {exp.mvpContributions.map((contribution, contribIndex) => (
                            <li key={contribIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                              {contribution}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;