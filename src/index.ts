require("dotenv").config();
import express from "express";
const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});

app.get("/", (req, res) => {
  res.json({ username: "user1", password: "user12345" });
});
