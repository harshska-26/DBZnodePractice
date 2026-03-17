const { MissingFieldFunc } = require("../utilities/missin.util");

const CharValidFunc = (req, res, next) => {
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

module.exports = {CharValidFunc}