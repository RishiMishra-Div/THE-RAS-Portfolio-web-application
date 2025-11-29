import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent font-heading cursor-pointer">
              Rishi.
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <a className={`hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium ${
                    location === link.href ? "text-primary" : "text-gray-300"
                  }`}>
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/login">
                 <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                    Admin
                 </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.label}
                </a>
              </Link>
            ))}
             <Link href="/login">
                <a onClick={() => setIsOpen(false)} className="text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Admin Login
                </a>
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Rishi.</h3>
            <p className="text-gray-400 max-w-xs">
              Building digital experiences with modern technologies and clean design.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/"><a className="text-gray-400 hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/projects"><a className="text-gray-400 hover:text-primary transition-colors">Projects</a></Link></li>
              <li><Link href="/#services"><a className="text-gray-400 hover:text-primary transition-colors">Services</a></Link></li>
              <li><Link href="/#contact"><a className="text-gray-400 hover:text-primary transition-colors">Contact</a></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-heading">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Mail size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Rishi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
