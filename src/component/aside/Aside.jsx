import { useState } from "react";
import "./aside.css";
import { assets } from "../../assets/assets.js";
import { useApiContext } from "../../context/Context.jsx";
import { AsideWrapper } from "./AsideWrapper.jsx";
import { SettingBox } from "./SettingBox.jsx";
import { RecentList } from "./RecentList.jsx";

export default function Aside() {
  const { prevPrompts, newChat, immediateSent } = useApiContext();
  const [extended, setExtended] = useState(false);

  const handleToggle = () => setExtended((prev) => !prev);

  return (
    <AsideWrapper extended={extended}>
      <div className="top-section flex flex-col gap-3">
        <SettingBox
          imgAlt="Menu Icon"
          imgSrc={assets.menu_icon}
          title="Extend"
          onClick={handleToggle}
        />
        <SettingBox
          imgAlt="Plus Icon"
          imgSrc={assets.plus_icon}
          title="New Chat"
          onClick={() => newChat()}
        />

        {extended && (
          <div className="recent">
            <p className="font-semibold text-lg mt-2 tracking-wider">Recents</p>
            <RecentList />
          </div>
        )}
      </div>

      <div className="bottom-ssection flex flex-col gap-3">
        <SettingBox
          imgAlt="Question Icon"
          imgSrc={assets.question_icon}
          title="Help"
        />
        <SettingBox
          imgSrc={assets.history_icon}
          imgAlt="History Icon"
          title="Recents"
        />
        <SettingBox
          imgAlt="Setting Icon"
          imgSrc={assets.setting_icon}
          title="Settings"
        />
      </div>
    </AsideWrapper>
  );
}
