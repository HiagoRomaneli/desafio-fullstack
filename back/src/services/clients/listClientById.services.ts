import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors";
import { IGetClientById } from "../../interfaces/clients.interfaces";
import { ListClientByIdSchema } from "../../schemas/clients.schemas";

const listClientByIdService = async (
  clientId: number
): Promise<IGetClientById | null> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client = await clientRepository.findOne({
    where: { id: clientId },
    relations: { contacts: true },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return ListClientByIdSchema.parse(client);
};

export default listClientByIdService;
