import Aside from "./aside/Aside.jsx";
import Main from "./main/Main.jsx";

export default function RouterWrapper() {
  return (
    <>
      <div className="wrapper flex gap-4">
        <Aside />
        <Main />
      </div>
    </>
  );
}
