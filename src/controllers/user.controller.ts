import { UserService } from "@/services/user.service.js";
import { Request, Response } from "express";
export class UserController {
  static async createUser(req: Request, res: Response) {
    UserService.createUser(req, res);
  }
}
