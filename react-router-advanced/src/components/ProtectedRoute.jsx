import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("user"); // fake auth
    return isAuthenticated ? children : <Navigate to="/login" replace />;
    }
    