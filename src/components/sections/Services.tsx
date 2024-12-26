import {
  Shield,
  Users,
  Search,
  AlertTriangle,
  Lock,
  FileText,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Personal Digital Security',
      description:
        'Comprehensive protection for your devices and networks with advanced encryption.',
    },
    {
      icon: Users,
      title: 'Social Media Security',
      description:
        'Protect your online presence and reputation with advanced monitoring.',
    },
    {
      icon: Search,
      title: 'Threat Intelligence',
      description:
        'Proactive dark web monitoring and early threat detection systems.',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description:
        '24/7 emergency response team ready to handle any security breach.',
    },
    {
      icon: Lock,
      title: 'Privacy Consulting',
      description:
        'Expert guidance on data protection and regulatory compliance.',
    },
    {
      icon: FileText,
      title: 'Security Audits',
      description:
        'Regular comprehensive assessments of your digital security posture.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Comprehensive Security Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a full suite of cybersecurity services designed specifically
            for high-net-worth individuals and their unique security needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-primary/10 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}