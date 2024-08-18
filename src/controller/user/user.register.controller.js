const {createUser} = require("../user.controller.js");
function createUserModel(req) {
  try {
    const user = {
      name: req.body.name,
      fathersName: req.body.fathersName,
      mothersName: req.body.mothersName,
      dateOfBirth: req.body.dateOfBirth,
      address: {
        current: req.body.currentAddress,
        permanent: req.body.permanentAddress,
      },
      nationalID: req.body.nationalID,
      UTIN: req.body.UTIN,
      TIN: req.body.TIN,
      circle_taxArea: {
        // Corrected spelling
        circle: req.body.circle,
        taxArea: req.body.taxArea,
      },
      contact: {
        office: req.body.officeContact,
        home: req.body.homeContact,
        email: req.body.email,
      },
      employersName: req.body.employersName,
      spouse: {
        name: req.body.spouseName,
        TIN: req.body.spouseTIN,
      },
      assessmentYear: req.body.assessmentYear,
      residentialStatus: req.body.residentialStatus,
      taxpayersStatus: req.body.taxpayersStatus,
    };
    return user;
  } catch (error) {
    return null;
  }

  return user;
}
const register = async (req, res) => {
  try {
    console.log("body: ", req.body);
    const user = createUserModel(req);
    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Invalid user data",
      });
    }
    const savedUser = await createUser(user);
    if (!savedUser) {
      return res.status(500).json({
        status: "error",
        message: "Internal server erroree",
      });
    }
    return res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
module.exports = register;
