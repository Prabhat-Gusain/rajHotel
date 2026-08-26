// import "./Navbar.css"

// function Navbar()
// {
//     return (
//         <header className="navbar">
//             <a href="#home" className="hotel-logo">
//                 Raj Hotel
//             </a>

//             <nav className="nav-links">
//                 <a href="#home">Home</a>
//                 <a href="#about">About</a>
//                 <a href="#rooms">Rooms</a>
//                 <a href="#location">Location</a>
//                 <a href="#contact">contact</a>
//             </nav>

//             <a href="#contact" className="booking-button">
//                 Book Now
//             </a>
//         </header>
//     )
// }

// export default Navbar;

// import { useState } from "react";
// import { generalWhatsAppLink } from "../config/hotel";
// import "./Navbar.css";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   function closeMenu() {
//     setMenuOpen(false);
//   }

//   return (
//     <header className="navbar">
//       <a href="#home" className="hotel-logo" onClick={closeMenu}>
//         Raj Hotel
//       </a>

//       <nav className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
//         <a href="#home" onClick={closeMenu}>
//           Home
//         </a>

//         <a href="#about" onClick={closeMenu}>
//           About
//         </a>

//         <a href="#rooms" onClick={closeMenu}>
//           Rooms
//         </a>

//         <a href="#location" onClick={closeMenu}>
//           Location
//         </a>

//         <a href="#contact" onClick={closeMenu}>
//           Contact
//         </a>

//         <a
//           href="#contact"
//           className="mobile-booking-button"
//           onClick={closeMenu}
//         >
//           Book Now
//         </a>
//       </nav>

//       <a href="#contact" className="booking-button">
//         Book Now
//       </a>

//       <button
//         type="button"
//         className={`menu-button ${menuOpen ? "menu-open" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Open navigation menu"
//         aria-expanded={menuOpen}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//     </header>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { generalWhatsAppLink } from "../config/hotel";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a href="#home" className="hotel-logo" onClick={closeMenu}>
        Raj Hotel
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#rooms" onClick={closeMenu}>
          Rooms
        </a>

        <a href="#location" onClick={closeMenu}>
          Location
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        {/* Mobile WhatsApp booking button */}
        <a
          href={generalWhatsAppLink}
          target="_blank"
          rel="noreferrer"
          className="mobile-booking-button"
          onClick={closeMenu}
        >
          Book Now
        </a>
      </nav>

      {/* Desktop WhatsApp booking button */}
      <a
        href={generalWhatsAppLink}
        target="_blank"
        rel="noreferrer"
        className="booking-button"
      >
        Book Now
      </a>

      <button
        type="button"
        className={`menu-button ${menuOpen ? "menu-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;