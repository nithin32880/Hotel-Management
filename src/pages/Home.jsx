import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);

  const searchHotels = async () => {
    const res = await axios.get(`http://localhost:8081/api/hotels?city=${city}`);
    setHotels(res.data);
  };

  return (
    <div className="p-4">
      {/* Header with Login/Register */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Search Hotels</h1>
        <div className="flex gap-2">
          <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">
            Login
          </Link>
          <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">
            Register
          </Link>
        </div>
      </div>

      {/* Search Box */}
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button className="bg-blue-500 text-white p-2 rounded" onClick={searchHotels}>
          Search
        </button>
      </div>

      {/* Hotel List */}
      <div className="mt-4">
        {hotels.map(hotel => (
          <div key={hotel.id} className="p-4 border rounded mb-2">
            <h2 className="text-lg font-bold">{hotel.name}</h2>
            <p>{hotel.address}</p>
            <Link className="text-blue-600" to={`/hotel/${hotel.id}`}>
              View Rooms
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
