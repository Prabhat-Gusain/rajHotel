import "./Rooms.css"

import deluxeRoom from "../assets/hotel/hotel-main.png";
import familyRoom from "../assets/hotel/hotel-main.png";
import premiumRoom from "../assets/hotel/hotel-main.png";


const roomsData=[
    {
        id:1,
        name:"Deluxe Rooms",
        image:deluxeRoom,
         description:
            "A comfortable and beautifully designed room perfect for couples.",
        guests: "2 Guests",
        bed: "1 Double Bed",
        price: "₹2,499",
    },
    {
        id: 2,
        name: "Family Room",
        image: familyRoom,
        description:
            "A spacious room designed for families travelling and staying together.",
        guests: "4 Guests",
        bed: "2 Double Beds",
        price: "₹3,999",
    },
    {
        id: 3,
        name: "Premium Room",
        image: premiumRoom,
        description:
            "Our premium room offers additional space, comfort and beautiful views.",
        guests: "3 Guests",
        bed: "1 King Bed",
        price: "₹4,499",
  },
];

function Rooms() {
  return (
    <section className="rooms-section" id="rooms">
      <div className="rooms-heading">
        <p className="rooms-label">OUR ACCOMMODATION</p>
        <h2>Rooms designed for your comfort</h2>

        <p>
          Choose from our comfortable and spacious rooms created to make your
          stay relaxing and memorable.
        </p>
      </div>

      <div className="rooms-container">
        {roomsData.map((room) => (
          <article className="room-card" key={room.id}>
            <div className="room-image-container">
              <img src={room.image} alt={room.name} />

              <div className="room-price">
                <strong>{room.price}</strong>
                <span>/ night</span>
              </div>
            </div>

            <div className="room-content">
              <h3>{room.name}</h3>

              <div className="room-details">
                <span>{room.guests}</span>
                <span>{room.bed}</span>
              </div>

              <p>{room.description}</p>

              <a href="#contact" className="room-button">
                View Details
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Rooms;
