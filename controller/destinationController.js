import { realpathSync } from "fs";
import con from "../config/db.js";
const db = con;

// Get All Destination
const getDestinations = async (req, res) => {
  const sql = "SELECT * FROM destinations order by from_address, to_address";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

// Add Destination
const addDestination = async (req, res) => {
  const { from_address, to_address, rate, note } = req.body;
  let resultt =
    "SELECT * FROM destinations where from_address = ? and to_address = ?;";
  db.query(resultt, [from_address, to_address], (err, desti) => {
    if (desti != "") {
      res.status(401).json({ message: "Destination is already exist!" });
      console.log("Destination already exist");
      console.log(desti);
    }
    if (desti == "") {
      const sql =
        "INSERT INTO destinations( from_address, to_address, rate, note ) values (?, ?, ?, ?)";
      db.query(sql, [from_address, to_address, rate, note], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ message: "Destination Added Successfully" });
          console.log("Destination Added Successfully");
        }
      });
    }
  });
};

// Get One Destination
const getDestination = async (req, res) => {
  const { desid } = req.params;
  const sql = "Select * from destinations where desid = ?";
  db.query(sql, desid, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

// Delete Destination
const deleteDestination = async (req, res) => {
  const { desid } = req.params;
  const sql = "DELETE FROM destinations WHERE desid =?";
  db.query(sql, desid, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        message: "Successfully Deleted",
      });
      console.log("Destination Deleted Successfully");
    }
  });
};

// Update Destination
const updateDestination = async (req, res) => {
  const { desid } = req.params;
  const { from_address, to_address, rate, note } = req.body;
  const sql =
    "UPDATE destinations Set from_address = ?, to_address = ?, rate = ?, note =? WHERE desid = ?";
  db.query(
    sql,
    [from_address, to_address, rate, note, desid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({
          message: "Updated Successfully",
        });
        console.log("Destination Updated Successfully");
      }
    }
  );
};

export {
  getDestinations,
  addDestination,
  getDestination,
  deleteDestination,
  updateDestination,
};
