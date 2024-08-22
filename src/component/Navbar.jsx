import React from "react";
import { assets } from "../assets/assets";
import logoImg from "../../public/gemini_sparkle_v002_d4735304ff6292a690345.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-4">
      <div className="logo font-bold text-2xl">
        <Link to="/" className="flex gap-1 items-center">
          <img src={logoImg} alt="Logo Image" />
          <h1 className="tracking-widest">Gemini</h1>
        </Link>
      </div>

      <div className="user-avatar">
        <img src={assets.user_icon} alt="User Avatar" />
      </div>
    </nav>
  );
}
