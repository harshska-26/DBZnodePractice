const { characters } = require("../Characters");
const { DefaultFilePath } = require("../constants/constants");
const { DataService } = require("../Services/DataCollection.Service");
const { WriteJSON } = require("../utilities/Json.util");

const DelCharCtrlFunc = (req, res) => {
  const { userName } = req.body;
  const CharRes = DataService();
  const CharItems = CharRes;
  const FilteredData = CharItems.filter((item) => item.name !== userName);
  WriteJSON(DefaultFilePath, FilteredData);
  res.status(200).json(characters);
};

module.exports = { DelCharCtrlFunc };
