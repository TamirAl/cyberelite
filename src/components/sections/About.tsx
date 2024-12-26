import { Award, Building2, Shield, Users } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Building2, value: '25+', label: 'Years Experience' },
    { icon: Shield, value: '500+', label: 'Security Audits' },
    { icon: Users, value: '100+', label: 'HNWI Clients' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Decades of Excellence in Cybersecurity
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Since 1998, CyberElite has been at the forefront of digital security, 
                protecting Fortune 500 companies and high-net-worth individuals from 
                evolving cyber threats.
              </p>
              
              <p>
                Our team comprises former intelligence agency professionals, certified 
                security experts, and privacy specialists who understand the unique 
                challenges faced by high-net-worth individuals in today's digital landscape.
              </p>
              
              <p>
                Drawing from our extensive experience securing major corporations, we've 
                developed a bespoke concierge model that brings enterprise-grade 
                protection to individual clients. This personalized approach ensures 
                that each client receives tailored security solutions that address 
                their specific needs and lifestyle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="p-6 bg-muted rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <stat.icon className="h-8 w-8 text-primary mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}