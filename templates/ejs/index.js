const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running`));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})
