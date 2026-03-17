const express = require("express");
const { characters } = require("./Characters");
const { CharValidFunc } = require("./Validations/CharValidation");
const { AddCharCtrl } = require("./controllers/AddChar.controller");
const { DelCharFunc, DelCharValFunc } = require("./Validations/DelCharValidation");
const { DelCharCtrlFunc } = require("./controllers/DelChar.Controller");

const app = express();

app.use(express.json());

app.post("/AddCharacters" , CharValidFunc, AddCharCtrl)
app.post("/DeleteCharacters", DelCharValFunc, DelCharCtrlFunc)
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);

});