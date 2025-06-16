import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api"; // import axios instance dari utils

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await api.post("cs/login", {
        username,
        password,
      });

      const { token, csId } = response.data;

      // Simpan token dan role
      localStorage.setItem("token", token);
      localStorage.setItem("csId", csId);
      localStorage.setItem("role", "cs");

      // Redirect ke halaman dashboard CS
      navigate("/cs-dashboard");
    } catch (err) {
      if (err.response?.status === 401) {
        setErrorMsg("Username atau password salah.");
      } else {
        setErrorMsg("Terjadi kesalahan. Coba lagi nanti.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login TV Branch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMsg && <p className="text-red-500 text-sm mb-3">{errorMsg}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
