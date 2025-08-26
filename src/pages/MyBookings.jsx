import { useState } from "react";
import axios from "axios";

function MyBookings() {
  const [userName, setUserName] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    const res = await axios.get(`http://localhost:8081/api/bookings/${userName}`);
    setBookings(res.data);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">My Bookings</h1>
      <input className="border p-2 m-2" placeholder="Enter your name" value={userName} onChange={e => setUserName(e.target.value)} />
      <button className="bg-blue-500 text-white p-2" onClick={fetchBookings}>View</button>

      <div className="mt-4">
        {bookings.map(b => (
          <div key={b.id} className="p-4 border rounded mb-2">
            <p><strong>Room ID:</strong> {b.room.id}</p>
            <p><strong>Check-In:</strong> {b.checkInDate}</p>
            <p><strong>Check-Out:</strong> {b.checkOutDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyBookings;
