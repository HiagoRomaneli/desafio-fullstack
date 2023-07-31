import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";

export const deleteContactService = async (
  contactId: number
): Promise<void | null> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
  });

  await contactRepository.remove(contact!);
};
