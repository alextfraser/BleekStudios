import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Base gradient - increased opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        
        {/* Animated dots pattern - increased opacity */}
        <div className="absolute inset-0 opacity-[0.2]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Accent shapes - increased size and opacity */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/25 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/25 blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative line - made bolder */}
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full mx-auto mb-8" />
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Crafting Digital Excellence with Bleek Studios
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            We transform your vision into exceptional web experiences through
            innovative design and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
              asChild
            >
              <a href="#contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary hover:bg-primary/10"
              asChild
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}