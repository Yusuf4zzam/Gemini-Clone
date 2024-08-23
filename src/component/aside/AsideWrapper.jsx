export const AsideWrapper = ({ children ,extended}) => {
  return (
    <aside
      className={`sidebar hidden md:flex flex-col justify-between py-8 px-4 ${
        extended ? "w-[200px] extended" : ""
      }`}
    >{ children }</aside>
  );
};
