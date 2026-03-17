const { characters } = require("../Characters");
const { DefaultFilePath } = require("../constants/constants");
const { DataService } = require("../Services/DataCollection.Service");
const { WriteJSON } = require("../utilities/Json.util");

const AddCharCtrl = (req, res) => {
  const CharRes = DataService();
  const payload = req.body;
  CharRes.push(payload);
  WriteJSON(DefaultFilePath, CharRes);
  res.status(200).json(characters)
};

module.exports = {AddCharCtrl}