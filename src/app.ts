import express from "express";
import HomeRoute from "@/routes/home.js";
const app = express();
const PORT = 3000;
app.use("/", HomeRoute);
app.listen(PORT, () =>
  console.log(`Server is listening at http://localhost:${PORT}`)
);
