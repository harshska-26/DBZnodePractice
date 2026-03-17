// const { DefaultFilePath } = require("../constants/constants");
// const { DataService } = require("../Services/DataCollection.Service");
// const { WriteJSON } = require("../utilities/Json.util");
// const { DelCharValFunc } = require("./Validations/DelCharValidation");


// const AddDelFunc = (req, res) => {
//   try {
//     CharRes = DataService();
//     const Data = CharRes.map((eachItem) => {
//       if (eachItem.type === "create") {
//         return CharValidFunc(req, res, () => {
//           return AddCharCtrl(req, res);
//         }
//     );
//       } else {
//         return DelCharValFunc(req, res, () => {
//           return DelCharCtrlFunc(req, res);
//         });
//       }
//     });
//   } catch (error) {
//     console.log(`error:${error}`);
//   }
// };

// module.exports = { AddDelFunc };
