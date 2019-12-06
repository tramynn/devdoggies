const bcrypt = require("bcryptjs");

async function getUser(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  }
}

module.exports = {
  getUser
};
