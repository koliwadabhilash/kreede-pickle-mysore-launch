import { Phone, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

interface CallBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallBookModal = ({ isOpen, onClose }: CallBookModalProps) => {
  const { toast } = useToast();
  const phoneNumber = "+91 96060 55181";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if user is on mobile device
    const checkMobile = () => {
      const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobile(mobile);
      
      // If on mobile and modal opens, directly initiate call and close modal
      if (mobile && isOpen) {
        window.location.href = `tel:${phoneNumber}`;
        // Small delay before closing to ensure tel: link is triggered
        setTimeout(() => onClose(), 100);
      }
    };
    
    checkMobile();
  }, [isOpen, phoneNumber, onClose]);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast({
      title: "Copied!",
      description: "Phone number copied to clipboard",
      duration: 2000,
    });
    onClose();
  };

  // If mobile, don't render the modal content since we're redirecting
  if (isMobile) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-kreede-black">
            Call & Book Your Court
          </DialogTitle>
          <DialogDescription className="text-center text-kreede-black/70">
            Reach out to us directly to reserve your spot
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-6">
          {/* Phone Number Display - Desktop Only */}
          <div className="w-full bg-kreede-black text-kreede-cream rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="h-8 w-8" />
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
                Call Us Now
              </p>
            </div>
            <p className="text-4xl font-bold mb-4">
              {phoneNumber}
            </p>
            
            <Button
              onClick={handleCopyNumber}
              className="w-full bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90"
              size="lg"
            >
              <Copy className="mr-2 h-5 w-5" />
              Copy Number
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-kreede-black/70">
            <p className="font-semibold mb-1 text-kreede-black">Available Hours</p>
            <p>6 AM - 11 PM, 7 Days a Week</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallBookModal;
