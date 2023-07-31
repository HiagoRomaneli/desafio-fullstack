import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactByIdController,
  listContactController,
  updateContactController,
} from "../controllers/contacts.controllers";
import { ensureContactExistsMiddleware } from "../middlewares/ensureContactExists.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { ContactSchemaRequest } from "../schemas/contacts.schema";

export const contactRoutes = Router();

contactRoutes.post(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureDataIsValidMiddleware(ContactSchemaRequest),
  createContactController
);
contactRoutes.get("", ensureTokenIsValidMiddleware, listContactController);
contactRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactExistsMiddleware,
  listContactByIdController
);
contactRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactExistsMiddleware,
  updateContactController
);
contactRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureContactExistsMiddleware,
  deleteContactController
);
