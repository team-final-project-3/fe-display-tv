import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Jika tidak ada token, arahkan ke halaman login
    return <Navigate to="/" replace />;
  }

  // Jika ada token, tampilkan halaman yang diminta
  return children;
};

export default ProtectedRoute;
