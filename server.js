import "express-async-errors";
import express from "express";
import morgan, { compile } from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// routers
import jobRouter from "./routes/jobRouter.js";

// middlewares
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/jobs/", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Route not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
