import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Services/api";
import {
  Client,
  Contact,
  IClientContext,
  IClientContextProvider,
} from "./interfaces";

export const ClientsContext = createContext({} as IClientContext);

export const ClientsProvider: React.FC<IClientContextProvider> = ({
  children,
}) => {
  const [client, setClient] = useState<Client | null>(null);
  const [clientContacts, setClientContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const token = window.localStorage.getItem("@token");
  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  useEffect(() => {
    const selfLogin = async () => {
      if (token) {
        try {
          navigate("/dashboard");
        } catch (error) {
          window.localStorage.clear();
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };
    selfLogin();
  }, []);

  const getClientById = async (clientId: number): Promise<void> => {
    try {
      const response = await api.get(`/clients/${clientId}`);
      setClient(response.data);
      setClientContacts(response.data.contacts);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientsContext.Provider
      value={{
        client,
        setClient,
        clientContacts,
        setClientContacts,
        loading,
        setLoading,
        getClientById,
        modal,
        setModal,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
