import "./WhatsAppButton.css";
import { generalWhatsAppLink } from "../config/hotel";

function WhatsAppButton() {
  return (
    <a
      href={generalWhatsAppLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Book a room through WhatsApp"
    >
      <span className="whatsapp-icon">WA</span>
      <span className="whatsapp-text">Book on WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;