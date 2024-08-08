import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODAL_NAME = "gemini-1.5-flash";
const API_KEY = "AIzaSyA2gmelm_5b-PwbUVAL__jfAUbtECFB6m4";

async function runChat(prompt) {
  const genAi = new GoogleGenerativeAI(API_KEY);
  const modal = genAi.getGenerativeModel({ model: MODAL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
    maxOutputTokens: 200,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const chat = await modal.startChat({
    generationConfig,
    safetySettings,
    histofy: [],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;

  return response.text();
}

export default runChat;
