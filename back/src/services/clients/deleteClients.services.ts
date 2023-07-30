import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";

export const deleteClientsService = async (clientId: number): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  await clientRepository.remove(findClient!);
};
