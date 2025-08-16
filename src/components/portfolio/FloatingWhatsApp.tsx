import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const message = "Hi Sandesh! I found your portfolio and would like to discuss a project opportunity.";
    window.open(`https://wa.link/lf2vfh`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulsing ring */}
          <div className="absolute inset-0 w-14 h-14 rounded-full bg-green-500/20 animate-ping" />
          
          {/* Main button */}
          <Button
            onClick={openWhatsApp}
            className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-floating hover:shadow-glow transition-spring p-0 animate-float"
            aria-label="Contact via WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-smooth pointer-events-none">
            <div className="bg-foreground text-background px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-medium">
              Chat on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile notification bubble */}
      <div className="fixed bottom-24 right-6 z-40 md:hidden">
        <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-large text-sm animate-bounce">
          💬 Need help? Let's chat!
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-500" />
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;