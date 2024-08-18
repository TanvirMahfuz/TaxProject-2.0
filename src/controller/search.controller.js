const search = async (req, res) => {
  try {
    const {name} = req.body.name;
    const results = await User.find({name: {$regex: name, $options: "i"}});
    return res.json(results);
  } catch (err) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }
};

module.exports = search;
