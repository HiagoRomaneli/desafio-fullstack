import { z } from "zod";
import { ClientSchemaWithoutPassword } from "./clients.schemas";

export const CreateContactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  created_at: z.date(),
  client: ClientSchemaWithoutPassword.nullish(),
});

export const ContactSchemaRequest = CreateContactSchema.omit({
  id: true,
  created_at: true,
});

export const UpdateContactSchema = CreateContactSchema.omit({
  id: true,
  created_at: true,
  clientId: true,
}).partial();
