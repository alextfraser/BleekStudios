import { Code2, Layout } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="h-8 w-8 text-primary" />;
      case 'Code2':
        return <Code2 className="h-8 w-8 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{getIcon(service.icon)}</div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}