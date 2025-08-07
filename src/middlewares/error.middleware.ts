import type { Request, Response, NextFunction } from "express";
import { AppError } from "@/app-error.js";
import { HttpStatus } from "@/utils/http.js";
export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const isCustom = error instanceof AppError;
  return res
    .status(isCustom ? error.statusCode : HttpStatus.INTERNAL_SERVER_ERROR)
    .json({
      success: false,
      message: error.message,
      error: isCustom ? undefined : "Internal server error",
    });
};
