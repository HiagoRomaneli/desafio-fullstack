import { Router } from "express";
import {
  createClientsController,
  deleteClientsController,
  listClientByIdController,
  listClientsController,
  updateClientsController,
} from "../controllers/clients.controllers";
import { ensureClientExistsMiddleware } from "../middlewares/ensureClientExists.middleware copy";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.middleware";
import { CreateClientSchemaReturn } from "../schemas/clients.schemas";

export const clientsRoutes = Router();

clientsRoutes.post(
  "",
  ensureDataIsValidMiddleware(CreateClientSchemaReturn),
  createClientsController
);
clientsRoutes.get("", ensureTokenIsValidMiddleware, listClientsController);
clientsRoutes.get(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureClientExistsMiddleware,
  listClientByIdController
);
clientsRoutes.patch(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureClientExistsMiddleware,
  updateClientsController
);
clientsRoutes.delete(
  "/:id",
  ensureTokenIsValidMiddleware,
  ensureClientExistsMiddleware,
  deleteClientsController
);
