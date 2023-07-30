import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const ensureIsAdminMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const authAdmin: boolean = response.locals.admin;

  if (!authAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
