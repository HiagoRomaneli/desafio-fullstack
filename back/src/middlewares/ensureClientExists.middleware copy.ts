import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clients.entity";
import { AppError } from "../errors";

export const ensureClientExistsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      id: parseInt(request.params.id),
    },
  });

  if (!findClient) {
    throw new AppError("Client not found", 404);
  }

  return next();
};
