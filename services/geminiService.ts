import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

// Safe initialization of Gemini client
try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (error) {
  console.error("Failed to initialize Gemini client:", error);
}

export const getQuickAnswer = async (query: string): Promise<string | null> => {
  if (!ai) return "Configure API Key to enable AI answers.";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: "You are a helpful, concise dashboard assistant. Provide extremely brief, direct answers (max 1-2 sentences) suitable for a quick-glance navigation card. If the user asks for a website, provide the URL.",
        temperature: 0.3,
      }
    });
    
    return response.text || null;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};
