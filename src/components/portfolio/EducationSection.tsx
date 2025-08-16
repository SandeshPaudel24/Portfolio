import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Madan Bhandari Memorial College",
  period: "2019 - 2024",
  location: "Kathmandu, Nepal",
  highlights: [
    "Applied MVP methods in academic projects, coursework, and independent learning",
    "Completed final year project using agile development methodology",
    "Participated in practical coding projects with focus on rapid prototyping",
    "Developed strong foundation in software engineering and system design"
  ],
  relevantCourses: [
    "Software Engineering",
    "Database Management",
    "Web Development",
    "Mobile App Development",
    "Data Structures & Algorithms",
    "System Analysis & Design"
  ]
};

const certifications = [
  {
    name: "Advanced Python Development",
    issuer: "Self-Learning & Practice",
    year: "2023",
    description: "Django, Flask, data analysis, and backend system development"
  },
  {
    name: "Flutter Mobile Development",
    issuer: "Google Developer Resources",
    year: "2022",
    description: "Cross-platform mobile app development with Dart and Firebase"
  },
  {
    name: "Data Analytics & Visualization",
    issuer: "Multiple Platforms",
    year: "2023",
    description: "Jupyter, Tableau, Power BI, and business intelligence tools"
  }
];

const continuousLearning = [
  "MVP Validation Techniques",
  "User Experience Research",
  "Product Analytics",
  "Lean Startup Methodology",
  "DevOps and CI/CD",
  "Cloud Architecture"
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Learning</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation combined with continuous learning in MVP methodologies and modern development
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Education */}
          <Card className="gradient-card shadow-soft">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{education.degree}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {education.institution}
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-muted-foreground">
                    <span>{education.period}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* MVP Highlights */}
              <div>
                <h4 className="font-semibold mb-3">MVP-Focused Academic Projects:</h4>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevant Courses */}
              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((course, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="group hover:shadow-medium transition-smooth gradient-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {cert.name}
                    </CardTitle>
                    <CardDescription>
                      {cert.issuer} • {cert.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <Card className="gradient-card shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Continuous Learning</CardTitle>
                  <CardDescription>
                    Staying current with MVP methodologies and emerging technologies
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {continuousLearning.map((topic, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth"
                  >
                    <div className="w-2 h-2 rounded-full bg-tech-cyan flex-shrink-0" />
                    <span className="text-sm font-medium">{topic}</span>
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

export default EducationSection;