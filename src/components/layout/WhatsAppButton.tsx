import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="icon"
        className="rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-xl"
      >
        <WhatsAppIcon className="h-8 w-8 text-white" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
