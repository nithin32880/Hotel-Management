import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HotelDetails from "./pages/HotelDetails";
import MyBookings from "./pages/MyBookings";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Dummy dashboard components
function CustomerDashboard() {
  return <h1>Welcome to Customer Dashboard</h1>;
}
function ManagerDashboard() {
  return <h1>Welcome to Manager Dashboard</h1>;
}
function AdminDashboard() {
  return <h1>Welcome to Admin Dashboard</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="p-4 bg-blue-600 text-white flex gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/bookings" className="hover:underline">My Bookings</Link>
        <Link to="/admin" className="hover:underline">Admin</Link>
        <Link to="/register" className="hover:underline">Register</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </nav>

      {/* Routes */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* New routes for dashboards */}
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          <Route path="/manager/dashboard" element={<ManagerDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
