import { Request, Response } from "express";

export class UserService {
  static createUser(req: Request, res: Response) {
    console.log("User Created");
  }
}
