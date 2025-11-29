import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { type Project } from "@/lib/mock-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="glass-card border-0 overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-heading text-white">{project.title}</CardTitle>
        <CardDescription className="text-gray-400 line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-white/10 hover:bg-white/20 text-primary-foreground border-0">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3 mt-auto">
        <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
        </Button>
        <Button size="sm" variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white">
          <Github className="mr-2 h-4 w-4" /> Code
        </Button>
      </CardFooter>
    </Card>
  );
}
