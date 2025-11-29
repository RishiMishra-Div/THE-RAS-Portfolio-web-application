import { Navbar, Footer } from "@/components/layout";
import { ProjectCard } from "@/components/project-card";
import { mockProjects } from "@/lib/mock-data";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pt-20">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              A collection of my work, side projects, and experiments.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
