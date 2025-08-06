import type { Response } from "express";
import { HttpStatus } from "@/utils/http.js";

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export function sendResponse<T>(
  res: Response,
  status: HttpStatus,
  payload: ApiResponse<T>
) {
  return res.status(status).json({
    success: payload.success,
    data: payload.data,
    error: payload.error,
    message: payload.message,
  });
}
