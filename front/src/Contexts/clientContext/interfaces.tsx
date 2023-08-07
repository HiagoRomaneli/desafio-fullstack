export interface IClientContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  client: Client | null;
  setClient: React.Dispatch<React.SetStateAction<Client | null>>;
  clientContacts: Contact[];
  setClientContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
  getClientById: (clientId: number) => Promise<void>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IClientContextProvider {
  children: React.ReactNode;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  admin: boolean;
  createdAt: string;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}
