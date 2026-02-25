import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateDoubtResponse = async (question: string, subject?: string) => {
  const model = "gemini-3.1-pro-preview";
  
  const systemInstruction = `You are an expert NEET tutor for Physics, Chemistry, and Biology (Class 11 & 12).
  Follow NCERT strictly.
  Keep answers under 120 words.
  If Physics: include formula.
  If Chemistry: include reaction or concept rule.
  If Biology: give bullet points.
  After explanation, give 1 NEET-level MCQ with answer.
  Do not give extra theory outside NEET syllabus.
  
  Subject context: ${subject || 'General NEET Preparation'}`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm sorry, I encountered an error while processing your doubt. Please try again.";
  }
};
