import { useState } from "react";
import axios from "axios";

function Admin() {
  const [hotel, setHotel] = useState({ name: "", city: "", address: "" });
  const [room, setRoom] = useState({ roomType: "", pricePerNight: 0, hotelId: "" });

  const addHotel = async () => {
    await axios.post("http://localhost:8081/api/admin/hotels", hotel);
    alert("Hotel added!");
  };

  const addRoom = async () => {
    await axios.post("http://localhost:8081/api/admin/rooms", { ...room, hotel: { id: room.hotelId } });
    alert("Room added!");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Panel</h1>

      <h2 className="font-bold mt-4">Add Hotel</h2>
      <input className="border p-2 m-2" placeholder="Name" onChange={e => setHotel({ ...hotel, name: e.target.value })} />
      <input className="border p-2 m-2" placeholder="City" onChange={e => setHotel({ ...hotel, city: e.target.value })} />
      <input className="border p-2 m-2" placeholder="Address" onChange={e => setHotel({ ...hotel, address: e.target.value })} />
      <button className="bg-blue-500 text-white p-2" onClick={addHotel}>Add Hotel</button>

      <h2 className="font-bold mt-4">Add Room</h2>
      <input className="border p-2 m-2" placeholder="Room Type" onChange={e => setRoom({ ...room, roomType: e.target.value })} />
      <input className="border p-2 m-2" type="number" placeholder="Price" onChange={e => setRoom({ ...room, pricePerNight: e.target.value })} />
      <input className="border p-2 m-2" placeholder="Hotel ID" onChange={e => setRoom({ ...room, hotelId: e.target.value })} />
      <button className="bg-green-500 text-white p-2" onClick={addRoom}>Add Room</button>
    </div>
  );
}
export default Admin;
