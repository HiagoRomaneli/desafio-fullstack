import { z } from "zod";

import {
  ContactSchemaRequest,
  CreateContactSchemaReturn,
  UpdateContactSchema,
} from "../schemas/contacts.schema";

export type IContact = z.infer<typeof ContactSchemaRequest>;
export type IContactResponse = z.infer<typeof CreateContactSchemaReturn>;
export type IContactUpdate = z.infer<typeof UpdateContactSchema>;
export type IContactById = z.infer<typeof CreateContactSchemaReturn>;
