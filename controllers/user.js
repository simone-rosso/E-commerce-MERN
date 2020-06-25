const User = require("../models/user")

exports.signup = (req, res) => {
  console.log(req.body)
  const user = new User(req.body)
  user.save((err, usr) => {
    if (err) {
      return res.status(400).json({
        err
      });
    } res.json({
      usr
    })
  })
}