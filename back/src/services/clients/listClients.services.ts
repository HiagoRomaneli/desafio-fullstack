import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { IAllClientsReturn } from "../../interfaces/clients.interfaces";
import { AllClientsReturn } from "../../schemas/clients.schemas";

export const listClientsService = async (): Promise<IAllClientsReturn> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const findClients: Array<Client> = await clientRepository.find();

  const clients = AllClientsReturn.parse(findClients);

  return clients;
};
