import React, { useEffect, useState } from "react";
import api from "../utils/api";

const Header = () => {
  const [branchName, setBranchName] = useState("");

  useEffect(() => {
    const fetchBranch = async () => {
      try {
        const res = await api.get("/cs/profile");
        const branch = res.data.cs.branch;
        setBranchName(branch.name);
      } catch (err) {
        console.error("Gagal mengambil data cabang:", err);
      }
    };

    fetchBranch();
  }, []);

  return (
    <div className="flex items-center gap-4 p-4">
      {/* Logo */}
      <img
        src="/images/logo-bni.png"
        alt="Logo BNI"
        className="w-16 h-16 object-contain"
      />

      {/* Teks */}
      <div>
        <h1 className="text-2xl font-semibold text-black">
          BANK NEGARA INDONESIA
        </h1>
        <p className="text-sm text-gray-600">Branch {branchName}</p>
      </div>
    </div>
  );
};

export default Header;
