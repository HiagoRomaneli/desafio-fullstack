import { z } from "zod";
import { ClientSchemaWithoutPassword } from "./clients.schemas";

export const CreateContactSchemaReturn = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  createdAt: z.date(),
  client: ClientSchemaWithoutPassword.nullish(),
});

export const ContactSchemaRequest = CreateContactSchemaReturn.omit({
  id: true,
  createdAt: true,
});

export const UpdateContactSchema = CreateContactSchemaReturn.omit({
  id: true,
  created_at: true,
  clientId: true,
}).partial();
