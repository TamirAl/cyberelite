import { Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = {
    company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">CyberElite</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Providing elite cybersecurity services to high-net-worth individuals worldwide. 
              Your digital security is our paramount concern.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} CyberElite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}