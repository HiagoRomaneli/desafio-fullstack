import { z } from "zod";

export const CreateClientSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email().max(45),
  phone: z.string(),
  admin: z.boolean().optional().default(false),
  password: z.string().min(4).max(120),
});

export const CreateClientSchemaReturn = CreateClientSchema.extend({
  id: z.number(),
  createdAt: z.string(),
});

export const ClientSchemaWithoutPassword = CreateClientSchemaReturn.omit({
  password: true,
});

export const AllClientsReturn = z.array(ClientSchemaWithoutPassword);

export const UpdateClientSchema = CreateClientSchema.omit({
  admin: true,
}).partial();

export const ListClientByIdSchema = CreateClientSchema.extend({
  contacts: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      email: z.string().email(),
      phone: z.string(),
      created_at: z.date(),
    })
  ),
});
