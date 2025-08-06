import express from "express";
import userRoutes from "@/routes/user.routes.js";
const app = express();
const PORT = 3000;
app.use("/api/v1/users", userRoutes);
app.listen(PORT, () =>
  console.log(`Server is listening at http://localhost:${PORT}`)
);
