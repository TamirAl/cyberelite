import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Shield, Lock, AlertTriangle, Users, Brain, Bomb } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      icon: Shield,
      question: "What types of cyber threats do high-net-worth individuals face?",
      answer: `High-net-worth individuals face sophisticated, targeted attacks including:
        • Spear phishing and whaling attacks targeting specific individuals
        • Advanced Persistent Threats (APTs) from well-resourced actors
        • Social engineering attacks exploiting personal information
        • Ransomware targeting valuable personal and financial data
        • Insider threats from trusted service providers`
    },
    {
      icon: Lock,
      question: "How do you protect against targeted phishing attacks?",
      answer: `We employ multiple layers of protection against phishing:
        • Advanced email filtering and authentication
        • Real-time link and attachment scanning
        • Protection against smishing (SMS phishing) and vishing (voice phishing)
        • Regular security awareness training
        • 24/7 monitoring for suspicious activities`
    },
    {
      icon: AlertTriangle,
      question: "What makes your service different from standard cybersecurity solutions?",
      answer: `Our service is specifically tailored for high-net-worth individuals:
        • Personalized risk assessments and security protocols
        • Dedicated security team for immediate response
        • Comprehensive protection across all digital assets
        • Regular security audits and updates
        • Proactive threat hunting and intelligence gathering`
    },
    {
      icon: Users,
      question: "How do you handle insider threats?",
      answer: `We implement comprehensive insider threat protection:
        • Strict access controls and monitoring
        • Regular background checks for service providers
        • Activity logging and behavioral analysis
        • Zero-trust security architecture
        • Regular security clearance reviews`
    },
    {
      icon: Brain,
      question: "What is your approach to social engineering attacks?",
      answer: `Our multi-faceted approach to social engineering defense includes:
        • Personal security awareness training
        • Digital footprint monitoring and management
        • Social media security protocols
        • Regular vulnerability assessments
        • Real-time threat detection and response`
    },
    {
      icon: Bomb,
      question: "How do you respond to ransomware attacks?",
      answer: `Our ransomware response protocol includes:
        • Immediate system isolation and threat containment
        • Secure data backup and recovery systems
        • Forensic analysis and threat elimination
        • Business continuity management
        • Post-incident security enhancement`
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about how we protect our clients from sophisticated cyber threats.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10"
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-card/80 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3 text-left">
                    <faq.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-base font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  <div className="pl-8">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i} className="mb-2">{line}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}