import { createContext, useContext, useState } from "react";
import runChat from "../config/gemini";

export const context = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const newChat = () => {
    setPrevPrompts([]);
    setShowResult(false);
    setResult("");
  };

  const immediateSent = async function (input) {
    onSent(input);
  };

  const onSent = async (input) => {
    setResult("");
    setLoading(true);
    setShowResult(true);

    const response = await runChat(input);

    let responseArray = response.split("**");
    let newArr = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newArr += responseArray[i];
      } else {
        newArr += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse = newArr.split("*").join("<br/>").split("##").join("");

    let newResponseArray = newResponse.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];

      setTimeout(() => {
        setResult((prev) => prev + nextWord + " ");
      }, 75 * i);
    }

    setPrevPrompts((prev) => Array.from(new Set([input, ...prev])));
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    input,
    setInput,
    prevPrompts,
    setPrevPrompts,
    loading,
    setLoading,
    showResult,
    setShowResult,
    result,
    setResult,
    onSent,
    newChat,
    immediateSent,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

export default ContextProvider;

export const useApiContext = () => {
  const ctx = useContext(context);
  if (!ctx) {
    throw new Error("useApiContext must be used within a ContextProvider");
  }
  return ctx;
};
