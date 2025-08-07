import { HttpStatus } from "@/utils/http.js";
export class AppError extends Error {
  statusCode: HttpStatus;
  isOperation: boolean;
  constructor(
    message: string,
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperation = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
