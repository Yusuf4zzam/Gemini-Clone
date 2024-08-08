import logoImg from "../../../public/gemini_sparkle_v002_d4735304ff6292a690345.svg";
import "./main.css";
import { assets } from "../../assets/assets";
import { context } from "../../context/Context";
import { useContext } from "react";
export default function Main() {
  const {
    input,
    setInput,
    prevPrompts,
    loading,
    showResult,
    result,
    onSent,
    immediateSent,
  } = useContext(context);

  return (
    <main>
      <nav className="flex items-center justify-between py-4 px-4">
        <div className="logo flex gap-1 items-center font-bold text-2xl">
          <img src={logoImg} alt="Logo Image" />
          <h1 className="tracking-widest">Gemini</h1>
        </div>

        <div className="user-avatar">
          <img src={assets.user_icon} alt="User Avatar" />
        </div>
      </nav>

      <div className="content-wrapper relative md:w-[650px] lg:w-[900px] mx-auto mt-12 px-4 md:px-0">
        {!showResult && (
          <div className="heading-content mb-20">
            <h2 className="text-4xl font-semibold tracking-wider mb-2">
              Welcome, Yusuf.
            </h2>
            <p className="text-4xl md:text-[50px] opacity-70">
              How can I help you?
            </p>
          </div>
        )}

        {loading && <div className="card-loader card-loader--tabs"></div>}

        {showResult && (
          <div className="result-container">
            {!loading && (
              <h2 className="font-bold text-2xl mb-4 capitalize flex items-start gap-3">
                <img src={logoImg} alt="Gemini Logo" />
                {prevPrompts[0]}
              </h2>
            )}
            <p
              className="result leading-6 text-sm"
              dangerouslySetInnerHTML={{ __html: result }}
            ></p>
          </div>
        )}

        {!showResult && (
          <div className="card-container flex flex-wrap sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div
              className="card rounded sm:h-[150px] sm:py-6 py-2 px-4 sm:px-6 relative cursor-pointer"
              onClick={() => immediateSent("Give Me A Food Recipes")}
            >
              <h4 className="font-bold tracking-widest">Food</h4>
              <div className="img-box w-[30px] hidden sm:block absolute right-2 bottom-2">
                <img src={assets.bulb_icon} alt="Bulb Icon" />
              </div>
            </div>
            <div
              className="card rounded sm:h-[150px] sm:py-6 py-2 px-4 sm:px-6 relative cursor-pointer"
              onClick={() => immediateSent("What Is The Weather Today?")}
            >
              <h4 className="font-bold tracking-widest">Weather</h4>
              <div className="img-box w-[30px] hidden sm:block absolute right-2 bottom-2">
                <img src={assets.compass_icon} alt="Compass Icon" />
              </div>
            </div>
            <div
              className="card rounded sm:h-[150px] sm:py-6 py-2 px-4 sm:px-6 relative cursor-pointer"
              onClick={() => immediateSent("What Is Coding and how can i code")}
            >
              <h4 className="font-bold tracking-widest">Code</h4>
              <div className="img-box w-[30px] hidden sm:block absolute right-2 bottom-2">
                <img src={assets.code_icon} alt="Bulb Icon" />
              </div>
            </div>
            <div
              className="card rounded sm:h-[150px] sm:py-6 py-2 px-4 sm:px-6 relative cursor-pointer"
              onClick={() => {
                immediateSent("What Is The Most Rich Countries In The World?");
              }}
            >
              <h4 className="font-bold tracking-widest">Countries</h4>
              <div className="img-box w-[30px] hidden sm:block absolute right-2 bottom-2">
                <img src={assets.gallery_icon} alt="Compass Icon" />
              </div>
            </div>
          </div>
        )}

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
            Gemini may display inaccurate information, including about
            individuals, so we recommend that you verify its responses.
            <a
              className="text-blue-600 ml-1"
              href="https://support.google.com/gemini?p=privacy_notice"
            >
              Your Privacy on Gemini Apps
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
