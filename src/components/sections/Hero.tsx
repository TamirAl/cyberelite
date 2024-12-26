import { Button } from '@/components/ui/button';
import { Shield, Lock, AlertCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover bg-center">
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold text-primary">CyberElite Protection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Elite Cybersecurity for Your Digital World
          </h1>
          
          <p className="text-xl mb-8 text-muted-foreground">
            Comprehensive digital protection tailored for high-net-worth individuals. 
            Your privacy and security are our highest priority.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              Book Private Consultation
            </Button>
            <Button size="lg" variant="outline" className="sm:w-auto border-primary text-primary hover:bg-primary/10">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: '24/7 Protection',
                description: 'Round-the-clock monitoring and threat detection',
              },
              {
                icon: Lock,
                title: 'Private Security',
                description: 'Advanced encryption and privacy measures',
              },
              {
                icon: AlertCircle,
                title: 'Rapid Response',
                description: 'Immediate action on security incidents',
              },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <feature.icon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}