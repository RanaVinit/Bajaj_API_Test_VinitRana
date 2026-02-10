const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI((process.env.GEMINI_API_KEY || "").trim());

const getAIResponse = async (question) => {
    try {
        if (!process.env.GEMINI_API_KEY) throw new Error("API Key missing");

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = `Answer the following question in exactly one word: ${question}`;

        const result = await model.generateContent(prompt);
        const text = result.response.text().trim().replace(/[^\w]/g, "");

        if (!text) throw new Error("No response from AI");
        return text;
    } catch (error) {
        // Preserving the status if it's a quota error
        if (error.status === 429) {
            const err = new Error("AI Quota exceeded");
            err.status = 429;
            throw err;
        }
        throw error;
    }
};

module.exports = { getAIResponse };
