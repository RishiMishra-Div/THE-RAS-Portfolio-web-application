import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Palette, Server, Layout, Smartphone, Database } from "lucide-react";

const iconMap: Record<string, any> = {
  Code,
  Palette,
  Server,
  Layout,
  Smartphone,
  Database
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}

export function ServiceCard({ title, description, iconName }: ServiceCardProps) {
  const Icon = iconMap[iconName] || Code;

  return (
    <Card className="glass-card border-0 p-6 hover:bg-white/10 transition-colors duration-300">
      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 font-heading">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
