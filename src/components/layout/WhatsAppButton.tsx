'use client';

import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9667706881" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hey there! I want to know more about your product"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="icon"
        className="rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-xl transition-transform duration-300 group-hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 group-hover:opacity-0"></span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
