import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entity";
import { AppError } from "../errors";

export const ensureContactExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const conatctRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await conatctRepository.findOne({
    where: {
      id: parseInt(request.params.id),
    },
  });

  if (!findContact) {
    throw new AppError("User not found", 404);
  }

  return next();
};
