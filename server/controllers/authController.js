const bcrypt = require("bcryptjs");

async function getUser(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  }
}

async function register(req, res) {
  const {
    first_name,
    last_name,
    age,
    email,
    username,
    password,
    has_dog
  } = req.body;

  const foundUser = await db.auth.checkForUsername([username]);

  if (foundUser[0]) {
    res.status(200).json("Username is Taken.");
  } else {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    const newUser = await db.auth.registerUser([
      first_name,
      last_name,
      age,
      email,
      username,
      hash,
      has_dog
    ]);

    req.session.user = {
      user_id: newUser[0].user_id,
      username: newUser[0].username,
      first_name: newUser[0].first_name,
      last_name: newUser[0].last_name,
      age: newUser[0].age,
      email: newUser[0].email
    };

    res.status(200).json(req.session.user);
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const foundUser = await db.auth.checkForUsername([username]);

  if (!foundUser) {
    res.status(400).json("User not found.");
  } else {
    const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash);
    if (!isAuthenticated) {
      res.status(403).json("Username or Password is incorrect");
    } else {
      req.session.user = {
        user_id: foundUser[0].user_id,
        username: foundUser[0].username,
        first_name: foundUser[0].first_name,
        last_name: foundUser[0].last_name,
        age: foundUser[0].age,
        email: newUser[0].email
      };
      res.status(200).json(req.session.user);
    }
  }
}

async function logout(req, res) {
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  getUser,
  register,
  login,
  logout
};
