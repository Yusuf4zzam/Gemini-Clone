import logoImg from "../../../public/gemini_sparkle_v002_d4735304ff6292a690345.svg";
import "./main.css";
import { assets } from "../../assets/assets";
import { useApiContext } from "../../context/Context";
import Navbar from "../Navbar";
import Spinner from "../common/Spinner";
import { Card } from "../common/Card";
import Footer from "../Footer";
export default function Main() {
  const { prevPrompts, loading, showResult, result, immediateSent } =
    useApiContext();

  return (
    <main>
      <Navbar />
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

        {loading && <Spinner />}

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
            <Card
              onClick={() => immediateSent("Give Me A Food Recipes")}
              image={assets.bulb_icon}
              imageAlt="Bulb Icon"
              title="Food"
            />
            <Card
              onClick={() => immediateSent("What Is The Weather Today?")}
              image={assets.compass_icon}
              imageAlt="Compass Icon"
              title="Weather"
            />
            <Card
              onClick={() => immediateSent("What Is Coding and how can i code")}
              image={assets.code_icon}
              imageAlt="Bulb Icon"
              title="Code"
            />
            <Card
              onClick={() =>
                immediateSent("What Is The Most Rich Countries In The World?")
              }
              image={assets.gallery_icon}
              imageAlt="Compass Icon"
              title="Countries"
            />
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}
