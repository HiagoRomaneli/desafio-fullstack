import { Request, Response } from "express";
import { createClientsServices } from "../services/clients/createClients.services";
import { deleteClientsService } from "../services/clients/deleteClients.services";
import { listClientByIdService } from "../services/clients/listClientById.services";
import { listClientsService } from "../services/clients/listClients.services";
import { updateClientsService } from "../services/clients/updateClients.services";

export const createClientsController = async (
  request: Request,
  response: Response
) => {
  const clientData = request.body;

  const newClient = await createClientsServices(clientData);

  return response.status(201).json(newClient);
};

export const listClientsController = async (
  request: Request,
  response: Response
) => {
  const clients = await listClientsService();

  return response.json(clients);
};

export const listClientByIdController = async (
  request: Request,
  response: Response
) => {
  const clientId = parseInt(request.params.id);

  const client = await listClientByIdService(clientId);

  return response.status(200).json(client);
};

export const updateClientsController = async (
  request: Request,
  response: Response
) => {
  const clientData = request.body;
  const clientId = parseInt(request.params.id);

  const updateClient = await updateClientsService(clientId, clientData);

  return response.json(updateClient);
};

export const deleteClientsController = async (
  request: Request,
  response: Response
) => {
  const clientId = parseInt(request.params.id);

  await deleteClientsService(clientId);

  return response.status(204).send();
};
