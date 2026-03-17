const {ReadJSON} = require("./utilities/Json.util")
const {DefaultFilePath} = require ("./constants/constants")

const characters = ReadJSON(DefaultFilePath);

module.exports = {characters};