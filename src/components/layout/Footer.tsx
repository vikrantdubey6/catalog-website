import { ToyBrick, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card mt-12 border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-4">
          <ToyBrick className="h-6 w-6 text-primary" />
          <p className="text-lg font-bold text-foreground">DM OVERSEAS</p>
        </div>
        <div className="flex justify-center items-center gap-6 mb-4">
            <a href="mailto:contact@dmoverseas.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>contact@dmoverseas.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>+1 (234) 567-890</span>
            </a>
        </div>
        <p className="text-sm">
          &copy; {currentYear} DM OVERSEAS. All rights reserved. Let the fun begin!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
