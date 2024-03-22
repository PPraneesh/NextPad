const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const user = req.body;

  const dbuser = await usersCollection.findOne({ username: user.username });
  if (dbuser !== null) return res.send({ message: "User already exists" });
  const hashedPassword = await bcrypt.hash(user.password, 7); // put salt in env
  user.password = hashedPassword;
  await usersCollection.insertOne(user);
  return res.send({ message: "User created" });
};

const userLogin = async (req, res) => {
  let usersCollection = req.app.get("usersCollection");
  const userCred = req.body;
  const dbuser = await usersCollection.findOne({ username: userCred.username });
  if (dbuser === null) return res.send({ message: "Invalid username" });
  else {
    let status = await bcrypt.compare(userCred.password, dbuser.password);
    if (status === false) {
      return res.send({ message: "Invalid password" });
    } else {
      const signedToken = jwt.sign({ username: userCred.username }, "abcdef", { //put secret key in env
        expiresIn: '1d',
      }); 
      delete dbuser.password;
      res.send({ message: "Login success", token: signedToken, user: dbuser });
    }
  }
};
module.exports = { createUser, userLogin };
