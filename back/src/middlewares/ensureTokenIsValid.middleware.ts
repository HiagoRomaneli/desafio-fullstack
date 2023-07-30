import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const ensureTokenIsValidMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): Response | void => {
  const token = request.headers.authorization;

  if (!token) {
    throw new AppError("Missing bearer token", 401);
  }

  const splitToken = token.split(" ")[1];

  jwt.verify(
    splitToken,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      response.locals.clientId = decoded.sub;
      response.locals.admin = decoded.admin;

      return next();
    }
  );
};
