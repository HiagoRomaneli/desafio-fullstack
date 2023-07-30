import { compare } from "bcryptjs";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clients.entity";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces/login.interfaces";

export const createLoginService = async (
  loginData: ILogin
): Promise<string> => {
  const userRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      userName: client.name,
      admin: client.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );

  return token;
};
