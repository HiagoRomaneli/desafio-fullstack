import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  AllClientsReturn,
  ClientSchemaWithoutPassword,
  CreateClientSchemaReturn,
  ListClientByIdSchema,
  UpdateClientSchema,
} from "../schemas/clients.schemas";

export type IClient = z.infer<typeof CreateClientSchemaReturn>;
export type IClientUpdate = DeepPartial<typeof UpdateClientSchema>;
export type IClientReturn = z.infer<typeof ClientSchemaWithoutPassword>;
export type IAllClientsReturn = z.infer<typeof AllClientsReturn>;
export type IListClientById = z.infer<typeof ListClientByIdSchema>;
