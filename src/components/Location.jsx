import "./Location.css";


function Location() {
    const hotelAddress = "Raj Hotel, Dehradun, Uttarakhand";
    const directionsLink = "https://www.google.com/maps/dir/?api=1&destination=30.148373,78.9854316";

    return (
        <section className="location-section" id="location">
            <div className="location-container">
                <div className="location-content">
                    <p className="location-label">FIND US</p>

                    <h2>Conveniently located for your stay</h2>
                    <p className="location-description">
                        Raj Hotel is situated in a peaceful and easily accessible location.
                        Use the map to find the best route to reach us.
                    </p>
                    <div className="location-details">
                        <div className="location-detail">
                            <span className="detail-number">01</span>

                            <div>
                                <h3>Hotel Address</h3>
                                <p>{hotelAddress}</p>
                            </div>
                        </div>

                        <div className="location-detail">
                            <span className="detail-number">02</span>

                            <div>
                                <h3>Check-in and Check-out</h3>
                                <p>Check-in: 12:00 PM</p>
                                <p>Check-out: 11:00 AM</p>
                            </div>
                        </div>
                    </div>
                    <a
                        href={directionsLink}
                        target="_blank"
                        rel="noreferrer"
                        className="directions-button"
                    >
                        Get Directions
                    </a>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps?q=30.148373,78.9854316&z=17&output=embed"
                        title="Raj Hotel and Restaurant Paithani location"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Location;