import "./Hero.css";
import hotelImage from "../assets/hotel/hotel-main.png";

function Hero()
{
    return(
        <section
            className="hero"
            id="home"
            style={{backgroundImage:`url(${hotelImage})`}}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content">
            <p className="hero-welcome">WELCOME</p>

            <h1>Raj Hotel</h1>

            <p className="hero-description">
                Comfortable rooms, beautiful surroundings and warm hospitality
                for a memorable stay.
            </p>

            <div className="hero-buttons">
                <a href="#rooms" className="primary-button">
                    Explore Rooms
                </a>

                <a href="#location" className="secondary-button">
                    View Location
                </a>
            </div>
        </div>
        </section>
    );
}

export default Hero;