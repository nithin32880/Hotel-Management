import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-bold mb-6">🏨 Welcome to Hotel Booking</h1>
      <div className="space-x-4">
        <Link to="/login" className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Login
        </Link>
        <Link to="/register" className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300">
          Register
        </Link>
      </div>
    </div>
  );
}
