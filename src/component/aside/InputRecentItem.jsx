export const InputRecentItem = ({ onClick, src, item }) => {
    return (
      <li>
        <button
          onClick={onClick}
          className="p-2 bg-slate-200 rounded w-full text-left text-nowrap flex gap-1"
        >
          <img className="w-[20px]" src={src} alt="Message Icon" />
          {item.slice(0, 13)}...
        </button>
      </li>
    );
  };