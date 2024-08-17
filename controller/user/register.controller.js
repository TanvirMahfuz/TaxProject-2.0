const {createUser} = require("../user.controller.js");
const register = async (req, res) => {
  try {
    console.log("body: ", req.body);
    const user = await createUser(req.body);
    if (!user) {
      return res.render("ClientForm", {
        response: {status: 500, message: "Internal Server Error"},
      });
    }
    console.log("user: ", user);
    return res.render("ClientForm", {
      response: {status: 200, message: "success"},
    });
  } catch (err) {
    return res.render("ClientForm", {
      response: {status: 200, message: "success"},
    });
  }
};
module.exports = register;
