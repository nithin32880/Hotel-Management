import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import MyBookings from "./pages/MyBookings";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-blue-600 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/bookings">My Bookings</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/bookings" element={<MyBookings />} />
        <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
