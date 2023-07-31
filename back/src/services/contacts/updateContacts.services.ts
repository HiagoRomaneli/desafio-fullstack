import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors";
import { IContactUpdate } from "../../interfaces/contacts.interfaces";
import { CreateContactSchemaReturn } from "../../schemas/contacts.schema";

export const updateContactService = async (
  contactId: number,
  contactData: any
): Promise<IContactUpdate> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const findContact = contactRepository.findOne({ where: { id: contactId } });

  if (!findContact) {
    throw new AppError("Contact not found", 404);
  }

  await contactRepository.update(contactId, contactData);

  const updatedContact = await contactRepository.findOneBy({ id: contactId });

  return CreateContactSchemaReturn.parse(updatedContact);
};
