const { characters } = require("../Characters");
const { DefaultFilePath } = require("../constants/constants");
const { DataService } = require("../Services/DataCollection.Service");
const { WriteJSON } = require("../utilities/Json.util");

const DelCharCtrlFunc = (req, res) => {
    const {userName} = req.body;
    const CharRes = DataService();
    const CharItems = CharRes.items;
    CharItems.pop(userName)
    WriteJSON(DefaultFilePath, CharItems)
    res.status(200).json(characters)
}

module.exports = {DelCharCtrlFunc}