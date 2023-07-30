import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  AllClientsReturn,
  ClientSchemaWithoutPassword,
  CreateClientSchema,
  ListClientByIdSchema,
  UpdateClientSchema,
} from "../schemas/clients.schemas";

export type IClient = z.infer<typeof CreateClientSchema>;
export type IClientUpdate = DeepPartial<typeof UpdateClientSchema>;
export type IClientReturn = z.infer<typeof ClientSchemaWithoutPassword>;
export type IAllClientsReturn = z.infer<typeof AllClientsReturn>;
export type IGetClientById = z.infer<typeof ListClientByIdSchema>;
