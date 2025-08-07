import { UserController } from "@/controllers/user.controller.js";
import { Router } from "express";
const router = Router();

router.post("/", UserController.createUser);

export default router;
