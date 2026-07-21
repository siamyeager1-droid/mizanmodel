import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const phone = "88016815477805"; // sample number from brochure
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all"
      aria-label="WhatsApp chat"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </a>
  );
}
