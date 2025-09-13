import { useLocation } from "react-router-dom";

export default function ManagerDashboard() {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manager Dashboard</h1>
      {message && (
        <p className="bg-green-100 text-green-700 p-2 rounded">
          {message}
        </p>
      )}
    </div>
  );
}
