import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
            Available for Freelance Projects
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            Building Digital <br />
            <span className="text-gradient">Experiences</span> That Matter
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            I'm Rishi, a Full Stack Developer specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-lg w-full sm:w-auto">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/10 hover:bg-white/5 text-white rounded-full px-8 h-12 text-lg w-full sm:w-auto">
              Download CV <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
