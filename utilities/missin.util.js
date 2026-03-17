const MissingFieldFunc = (requiredfields, reqbody) => {
  Missingfields = [];

  requiredfields.map((eachItem) => {
    if (!reqbody[eachItem]) {
      Missingfields.push(eachItem);
    }
  });

  if (Missingfields.length > 0) {
    return Missingfields;
  }
};

module.exports = { MissingFieldFunc };
