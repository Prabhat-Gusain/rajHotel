import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <a href="#home" className="footer-logo">
            Raj Hotel
          </a>

          <p>
            Comfortable rooms, peaceful surroundings and warm hospitality for
            a relaxing and memorable stay.
          </p>

          <a href="#contact" className="footer-book-button">
            Book Your Stay
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About Hotel</a>
            <a href="#rooms">Our Rooms</a>
            <a href="#location">Location</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-contact">
          <h3>Contact Details</h3>

          <div>
            <span>Address</span>
            <p>Raj Hotel and Restaurant, Paithani, Uttarakhand</p>
          </div>

          <div>
            <span>Phone</span>
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </div>

          <div>
            <span>Email</span>
            <a href="mailto:contact@rajhotel.com">
              contact@rajhotel.com
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Raj Hotel and Restaurant. All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;