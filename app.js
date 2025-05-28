const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

let contacts = [];

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/contacts", (req, res) => {
  const { name, phone } = req.body;
  contacts.push({ name, phone });
  res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
