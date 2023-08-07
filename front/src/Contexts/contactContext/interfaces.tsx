export interface IContactsContext {
  modalEdit: boolean;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  newContact: (contactData: ContactRequest, clientdId: number) => Promise<void>;
  updateContact: (
    contactData: ContactRequest,
    clientdId: number
  ) => Promise<void>;
  deleteContact: (clientdId: number) => Promise<void>;
  contactSelected: any;
  setContactSelected: any;
  selectedContact: any;
}

export interface IContactsContextProvider {
  children: React.ReactNode;
}

export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
}

export interface ContactUpdate {
  name?: string;
  email?: string;
  phone?: string;
}
