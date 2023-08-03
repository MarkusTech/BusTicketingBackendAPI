import con from "../config/db.js";
const db = con;
import bcrypt from "bcrypt";

const login = async (req, res) => {
  const { Username, Password } = req.body;
  const sql = `SELECT * FROM users WHERE Username= ?`;
  db.query(sql, Username, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length === 0) {
      res.status(401).json({ message: "Invalid Username or Password" });
      console.log("Invalid Username");
    } else {
      const user = result[0];

      bcrypt.compare(Password, user.Password, (err, isMatch) => {
        if (err) {
          console.log(err);
        }
        if (isMatch) {
          // Passwords match, user is authenticated
          res.status(200).json({ message: "Login Successfully" });
          console.log("Login Successfully");
        } else {
          res.status(401).json({ message: "Invalid Username or Password" });
        }
      });
    }
  });
};

const logout = async (req, res) => {
  res.send("Logout Successfully");
  console.log("Logout Successfully");
};

export { login, logout };
