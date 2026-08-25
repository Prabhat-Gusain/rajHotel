import "./About.css";
import aboutImage from "../assets/hotel/hotel-main.png";

function About()
{
    return(
        <section className="about" id="about">
        <div className="about-image-container">
        <img
          src={aboutImage}
          alt="Raj Hotel exterior view"
          className="about-image"
        />

        <div className="experience-box">
          <strong>10+</strong>
          <span>Years of Hospitality</span>
        </div>
        </div>

        <div className="about-content">
        <p className="section-label">ABOUT OUR HOTEL</p>

        <h2>Experience comfort and warm hospitality</h2>

        <p className="about-description">
          Raj Hotel offers comfortable rooms, peaceful surroundings and
          friendly service to make every stay relaxing and memorable.
        </p>

        <p className="about-description">
          Whether you are travelling with family, visiting for work or
          enjoying a weekend getaway, our hotel provides everything you need
          for a comfortable stay.
        </p>

        <div className="about-features">
          <div className="feature">
            <span>01</span>

            <div>
              <h3>Comfortable Rooms</h3>
              <p>Clean and spacious rooms designed for complete relaxation.</p>
            </div>
          </div>

          <div className="feature">
            <span>02</span>

            <div>
              <h3>Prime Location</h3>
              <p>Conveniently located with easy access to nearby attractions.</p>
            </div>
          </div>
        </div>

        <a href="#rooms" className="about-button">
          Discover Our Rooms
        </a>
        </div>
    </section>
    );
}

export default About;