import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateDoubtResponse = async (question: string, subject?: string) => {
  const model = "gemini-3.1-pro-preview";
  
  const systemInstruction = `You are an expert NEET (National Eligibility cum Entrance Test) tutor. 
  Your goal is to help students understand complex concepts in Physics, Chemistry, and Biology for Class 11 and 12.
  
  Guidelines:
  1. Provide clear, concise, and accurate explanations.
  2. Use NCERT-based terminology as it's crucial for NEET.
  3. Reference specific chapters or concepts from the Class 11/12 syllabus where relevant.
  4. If applicable, provide mnemonics or tips to remember facts.
  5. For numerical problems, show step-by-step solutions with units.
  6. If the question is outside the scope of NEET (Physics, Chemistry, Biology), politely redirect the student.
  7. Use Markdown for formatting (bolding, lists, LaTeX-style math if needed).
  
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
