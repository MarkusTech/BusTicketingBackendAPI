import express from "express";
const router = express.Router();
import {
  getDestinations,
  addDestination,
  getDestination,
  deleteDestination,
  updateDestination,
} from "../controller/destinationController.js";

router.get("/destination", getDestinations);
router.post("/destination", addDestination);
router.get("/destination/:desid", getDestination);
router.delete("/destination/:desid", deleteDestination);
router.put("/destination/:desid", updateDestination);

export default router;
