require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
console.log("🚀 ~ PORT:", PORT);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/users/:id", (_req, res) => {
  const userId = _req.params.id;
  res.send(`User ID: ${userId}`);
});

app.get("/search", (_req, res) => {
  const term = _req.query.term || "no query";
  const category = _req.query.category || "all";
  res.send(`
    <h1>Search Results</h1>
    <p>Term: ${term}</p>
    <p>Category: ${category}</p>
  `);
});

app.post("/form", (req, res) => {
  const name = req.body.name || "anonymous";
  const email = req.body.email || "no email";
  res.json({
    message: `received form data`,
    data: {
      name,
      email,
    },
  });
});

app.post("api/data", (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      error: "No data provided",
    });
  }

  res.status(200).json({
    message: "Data received successfully",
    data,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
