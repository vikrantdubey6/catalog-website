import { ToyBrick } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card mt-12 border-t">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-2">
          <ToyBrick className="h-6 w-6 text-primary" />
          <p className="text-lg font-bold text-foreground">ToyVerse</p>
        </div>
        <p className="text-sm">
          &copy; {currentYear} ToyVerse. All rights reserved. Let the fun begin!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
