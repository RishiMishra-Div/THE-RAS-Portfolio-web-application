import { Navbar, Footer } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { mockProjects, services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Quote } from "lucide-react";

export default function Home() {
  // Get only the first 3 projects for preview
  const previewProjects = mockProjects.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl transform rotate-3 blur-lg opacity-50"></div>
                <div className="relative glass-card p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4 font-heading">Who am I?</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    I'm a passionate Full Stack Developer based in San Francisco. I have a strong foundation in web development and a keen eye for design.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    With over 5 years of experience, I've worked with startups and established companies to build scalable web applications. I love solving complex problems and learning new technologies.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                  Bridging the gap between <span className="text-gradient">Design</span> and <span className="text-gradient">Engineering</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  I believe that the best products are built at the intersection of great design and solid engineering. I strive to create user interfaces that are not only beautiful but also performant and accessible.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white font-heading">50+</h4>
                    <p className="text-sm text-gray-500">Projects Completed</p>
                  </div>
                  <div className="w-px bg-white/10 h-12"></div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white font-heading">5+</h4>
                    <p className="text-sm text-gray-500">Years Experience</p>
                  </div>
                  <div className="w-px bg-white/10 h-12"></div>
                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-white font-heading">100%</h4>
                    <p className="text-sm text-gray-500">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />

        {/* Projects Preview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Featured Projects</h2>
                <p className="text-gray-400">A selection of my recent work.</p>
              </div>
              <Link href="/projects">
                <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {previewProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How I can help you succeed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard 
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  iconName={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section (Static) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Client Testimonials</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl relative">
                <Quote className="absolute top-6 right-6 text-primary/20 h-12 w-12" />
                <p className="text-gray-300 mb-6 italic relative z-10">
                  "Rishi is an exceptional developer. He delivered our project on time and exceeded our expectations with the design quality."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div>
                    <h4 className="text-white font-bold">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">CEO, TechStart</p>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-xl relative">
                <Quote className="absolute top-6 right-6 text-primary/20 h-12 w-12" />
                <p className="text-gray-300 mb-6 italic relative z-10">
                  "Working with Rishi was a pleasure. His attention to detail and ability to solve complex problems is unmatched."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
                  <div>
                    <h4 className="text-white font-bold">Emily Davis</h4>
                    <p className="text-sm text-gray-500">Product Manager, CreativeCo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Get in touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-heading">Let's work together</h2>
            </div>
            
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
