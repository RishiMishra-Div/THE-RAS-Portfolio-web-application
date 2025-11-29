import { mockSkills } from "@/lib/mock-data";
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, 
  SiHtml5, SiCss3, SiGit, SiTypescript 
} from "react-icons/si";

// Note: In a real environment we'd use dynamic imports or a proper icon map
// But since we can't install react-icons right now if it's not in package.json,
// let's check if we have lucide equivalents or fallback to text/simple divs.
// Checking package.json... react-icons is NOT there.
// I will use Lucide icons where possible or generic placeholders.

import { Code, Database, Globe, Layout, Server, Terminal, Cpu, Layers } from "lucide-react";

const iconMap: Record<string, any> = {
  "JavaScript": Code,
  "React": Globe,
  "Node.js": Server,
  "MongoDB": Database,
  "HTML5": Layout,
  "CSS3": Layers,
  "Git": Terminal,
  "TypeScript": Cpu
};

export function Skills() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">My Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mockSkills.map((skill) => {
            const Icon = iconMap[skill.name] || Code;
            return (
              <div key={skill.name} className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300 group">
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                  <Icon size={32} className="text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
