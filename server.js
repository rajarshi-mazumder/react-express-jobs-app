import express from "express";
import morgan, { compile } from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

import jobRouter from "./routes/jobRouter.js";

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

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Something went wrong" });
});

const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
