import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { IContactById } from "../../interfaces/contacts.interfaces";
import { CreateContactSchemaReturn } from "../../schemas/contacts.schema";

export const listContactByIdService = async (
  contactId: number
): Promise<IContactById | null> => {
  const contactsRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = await contactsRepository.findOne({
    where: { id: contactId },
    relations: ["client"],
  });

  const parsedContact = CreateContactSchemaReturn.parse(findContact);

  return parsedContact;
};
