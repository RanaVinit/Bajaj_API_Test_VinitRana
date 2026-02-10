const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { getFibonacci, getPrimes, getLCM, getHCF } = require("./utils");
const { getAIResponse } = require("./aiService");

const app = express();
const PORT = process.env.PORT || 3000;
const EMAIL = process.env.OFFICIAL_EMAIL || "vinit2321.be23@chitkara.edu.in";

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json({ is_success: true, official_email: EMAIL });
});

app.post("/bfhl", async (req, res) => {
    try {
        const payload = req.body;
        const validKeys = ["fibonacci", "prime", "lcm", "hcf", "AI"];
        const keys = Object.keys(payload).filter(k => validKeys.includes(k));

        if (keys.length !== 1) {
            return res.status(400).json({
                is_success: false,
                official_email: EMAIL,
                error: "Exactly one valid key required"
            });
        }

        const key = keys[0];
        const val = payload[key];
        let result;

        // Validation for math keys (return 400)
        if (key === "fibonacci") {
            if (typeof val !== "number" || val < 0) {
                return res.status(400).json({ is_success: false, official_email: EMAIL, error: "Fibonacci input must be a non-negative integer" });
            }
            result = getFibonacci(val);
        } else if (key === "prime") {
            if (!Array.isArray(val)) {
                return res.status(400).json({ is_success: false, official_email: EMAIL, error: "Prime input must be an array" });
            }
            result = getPrimes(val);
        } else if (key === "lcm" || key === "hcf") {
            if (!Array.isArray(val) || !val.length) {
                return res.status(400).json({ is_success: false, official_email: EMAIL, error: "LCM/HCF input must be a non-empty array" });
            }
            result = key === "lcm" ? getLCM(val) : getHCF(val);
        } else if (key === "AI") {
            if (typeof val !== "string" || !val.trim()) {
                return res.status(400).json({ is_success: false, official_email: EMAIL, error: "AI prompt required" });
            }
            try {
                result = await getAIResponse(val);
            } catch (err) {
                return res.status(err.status || 500).json({
                    is_success: false,
                    official_email: EMAIL,
                    error: err.message
                });
            }
        }

        return res.status(200).json({ is_success: true, official_email: EMAIL, data: result });

    } catch (err) {
        console.error("Critical API Error:", err.message);
        return res.status(500).json({
            is_success: false,
            official_email: EMAIL,
            error: "An internal server error occurred"
        });
    }
});

app.use((req, res) => res.status(404).json({ is_success: false, error: "Not Found" }));

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
