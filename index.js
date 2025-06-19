const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello from Dockerized Node.js app!");
});

console.log("hello deployment 19/06/2025 test9")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
