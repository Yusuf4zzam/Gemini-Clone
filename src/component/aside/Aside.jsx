import { useState } from "react";
import "./aside.css";
import { assets } from "../../assets/assets.js";
import { useApiContext } from "../../context/Context.jsx";

export default function Aside() {
  const { prevPrompts, newChat, immediateSent } = useApiContext();
  const [extended, setExtended] = useState(false);

  const handleToggle = () => setExtended((prev) => !prev);

  return (
    <aside
      className={`sidebar hidden md:flex flex-col justify-between py-8 px-4 ${
        extended ? "w-[200px] extended" : ""
      }`}
    >
      <div className="top-section flex flex-col gap-3">
        <div
          onClick={handleToggle}
          className="burger-icon icon-container w-[40px] h-[40px] flex items-center"
          data-button-name="Extend"
        >
          <img src={assets.menu_icon} alt="Menu Icon" />
        </div>

        <div
          className="plus-icon icon-container w-[40px] h-[40px] flex items-center"
          data-button-name="New Chat"
          onClick={() => newChat()}
        >
          <img src={assets.plus_icon} alt="Plus Icon" />
        </div>

        {extended && (
          <div className="recent">
            <p className="font-semibold text-lg mt-2 tracking-wider">Recents</p>
            <ul className="mt-2 text-sm flex flex-col gap-3">
              {prevPrompts.length > 0 ? (
                prevPrompts.map((e, i) => {
                  return (
                    <li key={i}>
                      <button
                        onClick={() => immediateSent(e)}
                        className="p-2 bg-slate-200 rounded w-full text-left text-nowrap flex gap-1"
                      >
                        <img
                          className="w-[20px]"
                          src={assets.message_icon}
                          alt="Message Icon"
                        />
                        {e.slice(0, 13)}...
                      </button>
                    </li>
                  );
                })
              ) : (
                <li>There Is No Data Yet..</li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="bottom-ssection flex flex-col gap-3">
        <div
          className="icon icon-container w-[40px] h-[40px] flex items-center"
          data-button-name="Help"
        >
          <img src={assets.question_icon} alt="Question Icon" />
        </div>
        <div
          className="icon icon-container w-[40px] h-[40px] flex items-center"
          data-button-name="Recents"
        >
          <img src={assets.history_icon} alt="History Icon" />
        </div>
        <div
          className="icon icon-container w-[40px] h-[40px] flex items-center"
          data-button-name="Settings"
        >
          <img src={assets.setting_icon} alt="Setting Icon" />
        </div>
      </div>
    </aside>
  );
}
