const express = require("express");
const cors = require("cors");
const { characters } = require("./Characters");
const { CharValidFunc } = require("./Validations/CharValidation");
const { AddCharCtrl } = require("./controllers/AddChar.controller");
const {
  DelCharFunc,
  DelCharValFunc,
} = require("./Validations/DelCharValidation");
const { DelCharCtrlFunc } = require("./controllers/DelChar.Controller");
const { AddDelFunc } = require("./controllers/AddDelChar.controller");
const { DefaultFilePath } = require("./constants/constants");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.get("/", (req, res) => {res.status(200).json(characters);});
app.post("/AddCharacters", CharValidFunc, AddCharCtrl);
app.post("/DeleteCharacters", DelCharValFunc, DelCharCtrlFunc);

// app.post("/AddDelCharacters", AddDelFunc)

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
