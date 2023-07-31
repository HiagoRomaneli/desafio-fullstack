import { Request, Response } from "express";
import { createContactsService } from "../services/contacts/createContacts.services copy 2";
import { deleteContactService } from "../services/contacts/deleteContacts.services copy 3";
import { listAllContactsService } from "../services/contacts/listContacts.services copy 4";
import { listContactByIdService } from "../services/contacts/listContactsById.services copy";
import { updateContactService } from "../services/contacts/updateContacts.services";

export const createContactController = async (
  request: Request,
  response: Response
) => {
  const contactData = request.body;

  const clientId = parseInt(request.params.id);

  const newClient = await createContactsService(clientId, contactData);

  return response.status(201).json(newClient);
};

export const listContactController = async (
  request: Request,
  response: Response
) => {
  const contacts = await listAllContactsService();

  return response.json(contacts);
};

export const listContactByIdController = async (
  request: Request,
  response: Response
) => {
  const contactId = parseInt(request.params.id);

  const contact = await listContactByIdService(contactId);

  return response.status(200).json(contact);
};

export const updateContactController = async (
  request: Request,
  response: Response
) => {
  const contactData = request.body;
  const contactId = parseInt(request.params.id);

  const updateContact = await updateContactService(contactId, contactData);

  return response.json(updateContact);
};

export const deleteContactController = async (
  request: Request,
  response: Response
) => {
  const contactId = parseInt(request.params.id);

  await deleteContactService(contactId);

  return response.status(204).send();
};
