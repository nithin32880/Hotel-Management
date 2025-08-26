import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HotelDetails() {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);
  const [booking, setBooking] = useState({ userName: "", checkInDate: "", checkOutDate: "", roomId: null });

  useEffect(() => {
    axios.get(`http://localhost:8081/api/hotels/${id}/rooms`).then(res => setRooms(res.data));
  }, [id]);

  const bookRoom = async () => {
    await axios.post("http://localhost:8081/api/bookings", {
      userName: booking.userName,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      room: { id: booking.roomId }
    });
    alert("Booking Successful!");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Available Rooms</h1>
      {rooms.map(r => (
        <div key={r.id} className="p-4 border rounded mb-2">
          <h2>{r.roomType}</h2>
          <p>₹{r.pricePerNight} per night</p>
          {r.available && (
            <button className="bg-green-500 text-white p-2" onClick={() => setBooking({ ...booking, roomId: r.id })}>
              Select Room
            </button>
          )}
        </div>
      ))}

      {booking.roomId && (
        <div className="mt-4 p-4 border">
          <h2 className="font-bold">Complete Booking</h2>
          <input className="border p-2 m-2" placeholder="Your Name" onChange={e => setBooking({ ...booking, userName: e.target.value })} />
          <input className="border p-2 m-2" type="date" onChange={e => setBooking({ ...booking, checkInDate: e.target.value })} />
          <input className="border p-2 m-2" type="date" onChange={e => setBooking({ ...booking, checkOutDate: e.target.value })} />
          <button className="bg-blue-500 text-white p-2" onClick={bookRoom}>Book Now</button>
        </div>
      )}
    </div>
  );
}
export default HotelDetails;
