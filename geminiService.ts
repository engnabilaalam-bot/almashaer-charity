import { GoogleGenerativeAI } from "@google/generative-ai";

// Access API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

const SYSTEM_INSTRUCTION = `
أنت مساعد ذكي "مساعد الخير" الخاص بجمعية المشاعر الخيرية في تعز، اليمن.
هدف الجمعية هو التكافل الاجتماعي، رعاية الأيتام، ودعم الأسر المحتاجة عبر منصة "غراس" (gharas.cloud).
الجمعية تتميز بالشفافية والمصداقية.
عندما يسألك المستخدم، أجب بلطف ومودة، وشجعهم على التبرع وعمل الخير.
معلومات عن الهيكل التنظيمي المقترح: مجلس الإدارة يرسم السياسات، الإدارة التنفيذية تنفذ، وهناك أقسام للمشاريع، والمالية، والرعاية الاجتماعية.
أجب باللغة العربية فقط وبشكل مختصر ومفيد.
`;

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
    if (!API_KEY) {
        console.warn("Gemini API Key is missing. Please set VITE_GEMINI_API_KEY in .env file.");
        return "عذراً، خدمة المساعد الذكي غير متوفرة حالياً (مفتاح API مفقود).";
    }

    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
            systemInstruction: SYSTEM_INSTRUCTION
        });

        // For simplicity in this demo, we're doing single turn generation, 
        // but incorporating history into the prompt manually if using model.generateContent
        // or properly using startChat for multi-turn.

        const chat = model.startChat({
            history: history.length > 0 ? [
                {
                    role: "user",
                    parts: [{ text: "سياق المحادثة السابقة: " + history.join("\n") }]
                },
                {
                    role: "model",
                    parts: [{ text: "فهمت، سأستمر في الحوار بناءً على هذا السياق." }]
                }
            ] : [],
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();

    } catch (error) {
        console.error("Gemini API Error:", error);
        return "واجهت مشكلة تقنية بسيطة، يرجى المحاولة لاحقاً.";
    }
};
