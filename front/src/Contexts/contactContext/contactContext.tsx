import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import { ClientsContext } from "../clientContext/clientContext";
import {
  ContactRequest,
  ContactUpdate,
  IContactsContext,
  IContactsContextProvider,
} from "./interfaces";

export const ContactsContext = createContext({} as IContactsContext);

export const ContactsProvider: React.FC<IContactsContextProvider> = ({
  children,
}) => {
  const token = window.localStorage.getItem("@token");
  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  const [modalEdit, setModalEdit] = useState(false);
  const [contactSelected, setContactSelected] = useState<ContactUpdate>();
  const { setLoading, setModal, setClientContacts } =
    useContext(ClientsContext);

  const selectedContact = (contact: any) => {
    setModalEdit(true);
    setContactSelected(contact);
  };

  const newContact = async (
    contactData: ContactRequest,
    clientId: number
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post(`/contacts/${clientId}`, contactData);
      setClientContacts(response.data);
      toast.success("Contato adicionado com sucesso!");
      setModal(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (
    contactData: ContactUpdate,
    contactId: number
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.patch(`/contacts/${contactId}`, contactData);
      setClientContacts(response.data);
      toast.success("Contato atualizado com sucesso!");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (contactId: number): Promise<void> => {
    try {
      await api.delete(`/contacts/${contactId}`);
      toast.success("Contato deletado!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        modalEdit,
        setModalEdit,
        contactSelected,
        setContactSelected,
        newContact,
        selectedContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
