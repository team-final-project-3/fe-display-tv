import React from "react";

const RunningText = () => {
  return (
    <div className="bg-black text-white py-2 px-4 text-sm font-medium">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        🎉 Promo Spesial Akhir Tahun! Dapatkan diskon hingga 30% di merchant
        favorit Anda dengan Kartu Debit BNI. 💳 | 🎁 Dapatkan hadiah langsung
        dengan membuka rekening BNI Taplus sekarang! | 🏦 Nikmati suku bunga
        spesial untuk BNI Fleksi mulai bulan ini. | 📱 Download BNI Mobile
        Banking dan nikmati fitur Wondr terbaru untuk transaksi lebih mudah!
      </marquee>
    </div>
  );
};

export default RunningText;
