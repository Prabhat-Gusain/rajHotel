import "./Contact.css";
import { generalWhatsAppLink } from "../config/hotel";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p>CONTACT US</p>

          <h2>Plan your stay with us</h2>

          <span>
            Contact us directly for room availability, prices and booking
            enquiries.
          </span>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-number">01</span>
            <p>CALL US</p>

            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-number">02</span>
            <p>EMAIL US</p>

            <a href="mailto:contact@rajhotel.com">
              contact@rajhotel.com
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-number">03</span>
            <p>VISIT US</p>

            <span>
              Raj Hotel and Restaurant,<br />
              Paithani, Uttarakhand
            </span>
          </article>
        </div>

        <div className="contact-action">
          <div>
            <p>Need help with your reservation?</p>
            <h3>Speak directly with our hotel team</h3>
          </div>

          <a
            href={generalWhatsAppLink}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;