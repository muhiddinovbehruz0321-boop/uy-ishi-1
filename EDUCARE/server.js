require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    name: "IT ACADEMY",
    message: "Server ishlayapti"
  });
});

app.post("/api/ai", async (req, res) => {
  const question = String(req.body?.question || "").trim();

  if (!question) {
    return res.status(400).json({
      error: "Savolingizni yozing."
    });
  }

  if (question.length > 2000) {
    return res.status(400).json({
      error: "Savol 2000 belgidan oshmasin."
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({
      error: "AI hozir sozlanmagan. .env fayliga OPENAI_API_KEY kiriting."
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions:
          "Sen IT ACADEMY platformasining o'zbek tilida javob beradigan dasturlash ustozisan. Javoblaring tushunarli, foydali va yosh o'quvchilar uchun mos bo'lsin. Kod so'ralganda ishlaydigan misol ber.",
        input: question
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI xatosi:", data);
      return res.status(502).json({
        error: "AI xizmatidan javob olishda xatolik. API sozlamalarini tekshiring."
      });
    }

    const answer = (data.output || [])
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("\n");

    res.json({
      answer: answer || "Hozircha javob olinmadi."
    });
  } catch (error) {
    console.error("AI server xatosi:", error.message);
    res.status(500).json({
      error: "Server bilan bog‘lanishda xatolik yuz berdi."
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`IT ACADEMY: http://localhost:${PORT}`);
});