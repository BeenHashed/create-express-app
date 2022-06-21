const express = require("express");

const app = express();
const PORT = process.env.PORT | 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

app.get("/", (req, res) => res.send("Hello, World!"));