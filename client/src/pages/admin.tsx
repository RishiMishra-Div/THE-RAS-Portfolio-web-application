import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Navbar, Footer } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockProjects, mockMessages } from "@/lib/mock-data";
import { Plus, Trash2, Edit, LogOut, Mail, Layout } from "lucide-react";

export default function Admin() {
  const [location, setLocation] = useLocation();
  const [projects, setProjects] = useState(mockProjects);
  const [messages, setMessages] = useState(mockMessages);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLocation("/login");
    }
  }, [setLocation]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLocation("/login");
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pt-20">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white font-heading">Admin Dashboard</h1>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="bg-white/5 border border-white/10 mb-8">
            <TabsTrigger value="projects" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Layout className="mr-2 h-4 w-4" /> Projects
            </TabsTrigger>
            <TabsTrigger value="messages" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              <Mail className="mr-2 h-4 w-4" /> Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Manage Projects</h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </div>
            
            <div className="grid gap-4">
              {projects.map((project) => (
                <div key={project.id} className="glass-card p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex gap-4 items-center">
                    <img src={project.imageUrl} alt={project.title} className="w-16 h-16 object-cover rounded-md bg-gray-800" />
                    <div>
                      <h3 className="font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-400 line-clamp-1">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end sm:self-center">
                    <Button size="icon" variant="ghost" className="hover:bg-white/10 text-gray-300">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="hover:bg-red-500/20 text-red-400" onClick={() => deleteProject(project.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages">
             <h2 className="text-xl font-semibold text-white mb-6">Inbox</h2>
             <div className="grid gap-4">
               {messages.map((msg) => (
                 <Card key={msg.id} className="glass-card border-0">
                   <CardHeader>
                     <div className="flex justify-between items-start">
                       <div>
                         <CardTitle className="text-lg text-white">{msg.name}</CardTitle>
                         <CardDescription className="text-primary">{msg.email}</CardDescription>
                       </div>
                       <span className="text-xs text-gray-500">{new Date(msg.createdAt).toLocaleDateString()}</span>
                     </div>
                   </CardHeader>
                   <CardContent>
                     <p className="text-gray-300">{msg.message}</p>
                   </CardContent>
                 </Card>
               ))}
             </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
