require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();
// Controllers
const ac = require("./controllers/authController");
const uc = require("./controllers/userController");
const dc = require("./controllers/dogController");
const dogalogue = require("./controllers/dogalogueController");
// Dotenv
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// Middleware
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

// Database Connection
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected :D");
});

// De-structured controllers
const { getUser, register, login, logout } = ac;

// Auth Endpoints
app.get("/auth/user", getUser);
app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/logout", logout);

// User Endpoints
app.get("/api/user/:username");
app.put("/api/user/:username");
app.delete("/api/user/:username");

// Dog Endpoints
app.get("/api/dog/:dog_id");
app.put("/api/dog/:dog_id");

// Dogalogue Endpoints
app.get("/api/dogalogue");

// Cart Endpoints
app.get("/api/cart");

app.listen(SERVER_PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
});
