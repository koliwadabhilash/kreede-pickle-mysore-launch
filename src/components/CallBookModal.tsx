import { Phone, X, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import zippyMascot from "@/assets/zippy-mascot.png";
import { useToast } from "@/hooks/use-toast";

interface CallBookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallBookModal = ({ isOpen, onClose }: CallBookModalProps) => {
  const { toast } = useToast();
  const phoneNumber = "+91 98458 09169";

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast({
      title: "Copied!",
      description: "Phone number copied to clipboard",
      duration: 2000,
    });
  };

  const handleCallNow = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Call & Book Your Court
          </DialogTitle>
          <DialogDescription className="text-center">
            Reach out to us directly to reserve your spot
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-6">
          {/* Zippy pointing to phone number */}
          <div className="flex items-center gap-4">
            <img 
              src={zippyMascot} 
              alt="Zippy the Fox" 
              className="w-24 h-24 object-contain animate-bounce"
            />
            <div className="bg-kreede-cream text-kreede-black px-4 py-2 rounded-xl text-sm font-bold">
              Call me! I'm ready to help! 🦊
            </div>
          </div>

          {/* Phone Number Display */}
          <div className="w-full bg-kreede-black text-kreede-cream rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="h-8 w-8" />
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
                Call Us Now
              </p>
            </div>
            <a 
              href={`tel:${phoneNumber}`}
              className="text-4xl font-bold hover:text-kreede-cream/90 transition-colors block mb-4"
            >
              {phoneNumber}
            </a>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                onClick={handleCallNow}
                className="flex-1 bg-kreede-cream text-kreede-black hover:bg-kreede-cream/90"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button
                onClick={handleCopyNumber}
                variant="outline"
                className="flex-1 border-kreede-cream text-kreede-cream hover:bg-kreede-cream/10"
                size="lg"
              >
                <Copy className="mr-2 h-5 w-5" />
                Copy Number
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="font-semibold mb-1">Available Hours</p>
            <p>6 AM - 11 PM, 7 Days a Week</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CallBookModal;
