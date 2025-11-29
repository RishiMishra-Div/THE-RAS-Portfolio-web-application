import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Mock API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="glass-card p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-white mb-6 font-heading">Send me a message</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell me about your project..." {...field} className="min-h-[120px] bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending..." : (
              <>Send Message <Send className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
