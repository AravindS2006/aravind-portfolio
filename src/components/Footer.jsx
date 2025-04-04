import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex flex-col items-center">
      <span>
        <p>Designed By Aravindselvan</p>
      </span>
      <div className="flex gap-6 mt-2">
        <a
          href="https://www.instagram.com/nova__trades/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://x.com/Aravindfx369"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/aravindselvan-c-a60992278/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;