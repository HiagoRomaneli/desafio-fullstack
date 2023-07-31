import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { IClientReturn } from "../../interfaces/clients.interfaces";
import { ClientSchemaWithoutPassword } from "../../schemas/clients.schemas";

export const updateClientsService = async (
  clientId: number,
  clientData: any
): Promise<IClientReturn> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClient: Client | null = await clientRepository.findOne({
    where: {
      id: clientId,
    },
  });

  await clientRepository.update(findClient!.id, clientData);

  const updatedClient = await clientRepository.findOne({
    where: { id: clientId },
  });

  return ClientSchemaWithoutPassword.parse(updatedClient);
};
