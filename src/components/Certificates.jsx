import React, { useState } from "react";
import "./Certificates.css"; // Import custom styles

// Array of certificates (replace with your actual image paths)
const certificates = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Certificate ${i + 1}`,
  image: `/src/assets/certificates/${i + 1}.png`,
}));

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closePopup = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificates-container py-10 px-5">
      <h2 className="text-4xl font-bold text-center mb-5">My Certificates</h2>
      <p className="achiever">What I have achieved so far is more than this</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleCertificateClick(certificate)}
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full max-w-[200px] object-cover rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="certificate-popup fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="popup-content bg-dracula p-5 rounded-lg shadow-lg relative max-w-[90%] w-[500px]">
            <button
              className="close-btn absolute top-2 right-2 text-gray-300 text-2xl font-bold"
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;