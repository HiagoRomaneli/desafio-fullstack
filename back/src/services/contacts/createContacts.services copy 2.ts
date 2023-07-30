import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";
import {
  IContact,
  IContactResponse,
} from "../../interfaces/contacts.interfaces";
import { CreateContactSchema } from "../../schemas/contacts.schema";

export const createContactsService = async (
  clientId: number,
  contactData: IContact
): Promise<IContactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const contact: Contact = contactRepository.create({
    ...contactData,
    client,
  });

  await contactRepository.save(contact);

  const newContact = CreateContactSchema.parse(contact);

  return newContact;
};
