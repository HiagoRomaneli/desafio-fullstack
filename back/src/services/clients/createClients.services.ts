import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors";
import { IClient, IClientReturn } from "../../interfaces/clients.interfaces";
import { ClientSchemaWithoutPassword } from "../../schemas/clients.schemas";

export const createClientsServices = async (
  clientData: IClient
): Promise<IClientReturn> => {
  const { email, name, admin, password, phone } = clientData;

  const clientRepository = AppDataSource.getRepository(Client);

  const findUser = await clientRepository.findOne({
    where: {
      email,
    },
  });

  if (findUser) {
    throw new AppError("user already exists", 409);
  }

  const hashedPassword = await hash(password, 10);
  const client: Client = clientRepository.create({
    name,
    email,
    password: hashedPassword,
    phone,
    admin: admin || false,
  });
  await clientRepository.save(client);

  const newClient = ClientSchemaWithoutPassword.parse(client);

  return newClient;
};
