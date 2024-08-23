import React from "react";
import { useApiContext } from "../context/Context";
import { assets } from "../assets/assets";

const Footer = () => {
  const {
    input,
    setInput,
    onSent,

  } = useApiContext();
  return (
    <footer className="my-6">
      <div className="search-container relative mb-6">
        <input
          className="w-full py-6 px-3 mb-3 sm:mb-0 text-sm font-bold tracking-wider"
          type="text"
          placeholder="Pleace Enter Your Question Here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="img-icon-box flex justify-end gap-3 sm:absolute top-6 right-8">
          <img
            className="w-[25px] cursor-pointer"
            src={assets.gallery_icon}
            alt="Image Icon"
          />
          <img
            className="w-[25px] cursor-pointer"
            src={assets.mic_icon}
            alt="Image Icon"
          />
          <img
            className="w-[25px] cursor-pointer"
            src={assets.send_icon}
            alt="Image Icon"
            onClick={() => (input.trim() !== "" ? onSent(input) : null)}
          />
        </div>
      </div>

      <p className="text-center text-sm">
        Gemini may display inaccurate information, including about individuals,
        so we recommend that you verify its responses.
        <a
          className="text-blue-600 ml-1"
          href="https://support.google.com/gemini?p=privacy_notice"
        >
          Your Privacy on Gemini Apps
        </a>
      </p>
    </footer>
  );
};

export default Footer;
