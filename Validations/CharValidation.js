const { MissingFieldFunc } = require("../utilities/missin.util");

const requiredFields = [
"id",
"name",
"ki",
"maxKi",
"race",
"gender",
"description",
"image",
"affiliation",
];
const CharValidFunc = (req, res, next) => {

  const MissingFields = MissingFieldFunc(requiredFields, req.body);
  if(MissingFields){
    res.status(400).json({
        Code:"0000",
        Message: "Required Fields Missing",
        Missing: {MissingFields,}
    })
    return;
  }
  next();
}

module.exports = {requiredFields, CharValidFunc}