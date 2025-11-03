require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
console.log("🚀 ~ PORT:", PORT);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
