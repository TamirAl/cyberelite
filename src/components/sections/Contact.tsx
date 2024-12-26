import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (888) CYBER-ELITE',
      link: 'tel:+18882923735',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@cyberelite.com',
      link: 'mailto:contact@cyberelite.com',
    },
    {
      icon: MapPin,
      title: 'Visit',
      details: 'New York • London • Dubai',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Contact Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a private consultation or reach out to learn more about our exclusive security services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-6 border-primary/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input placeholder="John Smith" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="How can we help?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea placeholder="Tell us about your security needs..." className="min-h-[150px]" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.title} className="p-6 border-primary/10">
                <div className="flex items-start space-x-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium text-primary">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}