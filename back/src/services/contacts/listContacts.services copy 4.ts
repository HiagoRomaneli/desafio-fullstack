import { Repository } from "typeorm";
import { z } from "zod";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { IContactResponse } from "../../interfaces/contacts.interfaces";
import { CreateContactSchema } from "../../schemas/contacts.schema";

export const listAllContactsService = async (): Promise<IContactResponse[]> => {
  const clientsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findClients = await clientsRepository.find({
    relations: { client: true },
  });

  return z.array(CreateContactSchema).parse(findClients);
};
