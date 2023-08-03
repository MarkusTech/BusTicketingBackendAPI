import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12629784",
  password: "GwSQzBTRBN",
  database: "sql12629784",
});
con.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database is Connected".bgGreen);
});

export default con;
