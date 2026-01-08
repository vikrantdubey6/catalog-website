'use client';

import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919667706881?text=Hey%20there!%20I%20want%20to%20know%20more%20about%20your%20product"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="icon"
        className="relative rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-xl transition-transform duration-300 group-hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8 text-white z-10" />

        {/* Ping animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
      </Button>
    </a>
  );
};

export default WhatsAppButton;
