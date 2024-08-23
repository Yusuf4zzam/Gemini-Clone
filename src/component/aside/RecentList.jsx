import { assets } from "../../assets/assets";
import { useApiContext } from "../../context/Context";
import { InputRecentItem } from "./InputRecentItem";

export const RecentList = () => {
    const { prevPrompts, immediateSent } = useApiContext();
    return (
      <ul className="mt-2 text-sm flex flex-col gap-3">
        {prevPrompts.length > 0 ? (
          prevPrompts.map((e, i) => {
            return (
              <InputRecentItem
                item={e}
                onClick={() => immediateSent(e)}
                src={assets.message_icon}
                key={i}
              />
            );
          })
        ) : (
          <li>There Is No Data Yet..</li>
        )}
      </ul>
    );
  };
  