const fs = require("fs");

const ReadJSON = (path) => {
  try {
    const readfile = fs.readFileSync(path);
    const ParsedData = JSON.parse(readfile);
    return ParsedData;
  } catch (error) {
    console.log(`Error is this ${error}`);
  }
};

const WriteJSON = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log(`Error: ${error}`);
    return error;
  }
};

module.exports = { ReadJSON, WriteJSON };
