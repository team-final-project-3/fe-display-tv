import React from "react";
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="relative z-10">
      {/* Motif oranye di bagian atas */}
      <div
        className="h-15 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/navbar_motif.png')` }}
      ></div>

      {/* Tombol logout di kanan atas */}
      <div className="absolute top-4 right-4">
        <button
          onClick={handleLogout}
          className="text-white hover:text-red-500"
          title="Logout"
        >
          <IoExitOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
