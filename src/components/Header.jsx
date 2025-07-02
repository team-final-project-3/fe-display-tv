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
    <div className="flex items-center gap-4 p-6">
      {/* Teks */}
      <div>
        <h1 className="text-4xl font-bold text-black">
          BANK NEGARA INDONESIA
        </h1>
        <p className="text-3xl text-orange-600 font-bold truncate max-w-xs">
          Branch {branchName}
        </p>
      </div>
    </div>
  );
};

export default Header;
