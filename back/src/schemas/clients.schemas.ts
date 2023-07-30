import { z } from "zod";

export const CreateClientSchemaReturn = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
  admin: z.boolean().optional().default(false),
  password: z.string().min(4).max(120),
});

export const CreateClientSchemaRequest = CreateClientSchemaReturn.extend({
  id: z.number(),
  createdAt: z.date(),
});

export const ClientSchemaWithoutPassword = CreateClientSchemaReturn.omit({
  password: true,
});

export const AllClientsReturn = z.array(ClientSchemaWithoutPassword);

export const UpdateClientSchema = CreateClientSchemaReturn.omit({
  admin: true,
}).partial();

export const ListClientByIdSchema = CreateClientSchemaReturn.extend({
  contacts: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      createdAt: z.date(),
    })
  ),
});
