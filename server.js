import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";

// ROUTES
import userRoutes from "./routes/userRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import authRoutes from "./routes/authRoutes.js";

// dotenv config
dotenv.config();const port = process.env.PORT;

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// REST API
app.get("/", (req, res) => {
  res.send("Bus Ticketing API is running with no errors");
});
app.use("/api.busticketing.com/v1", userRoutes);
app.use("/api.busticketing.com/v1", authRoutes);
app.use("/api.busticketing.com/v1", destinationRoutes);

// App listener where backend fired up
app.listen(port, () => {
  console.log(
    `Backend API is running on https://busticketingbackendapi.onrender.com`
      .bgCyan
  );
});
