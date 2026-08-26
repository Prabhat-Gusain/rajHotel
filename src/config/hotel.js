const WHATSAPP_NUMBER = "917983345384";

export function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const generalBookingMessage = `Hello Raj Hotel and Restaurant Paithani,

I want to enquire about a room booking.


Name:
Check-in date:
Check-out date:
Number of guests:
Room type:`;

export const generalWhatsAppLink = createWhatsAppLink(
  generalBookingMessage
);