import React from "react";
import { Navigate } from "react-router-dom";
import isTokenExpired from "../utils/isTokenExpired"; // pastikan file ini ada

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Tidak ada token → arahkan ke halaman login
    return <Navigate to="/" replace />;
  }

  if (isTokenExpired(token)) {
    // Token ada, tapi sudah expired → arahkan ke session expired
    return <Navigate to="/session-expired" replace />;
  }

  // Token valid → izinkan akses
  return children;
};

export default ProtectedRoute;
