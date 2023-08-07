import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ClientsContext } from "../../Contexts/clientContext/clientContext";
import { ContactsContext } from "../../Contexts/contactContext/contactContext";
import { StyledButtonPrimary } from "../../Styles/buttons";
import { StyledForm } from "../../Styles/form";
import { StyledH4 } from "../../Styles/typography";
import { StyledModalContainer } from "./style";

interface DecodedToken {
  sub: number;
}

export const ModalNewContact = () => {
  const { loading, setModal } = useContext(ClientsContext);
  const { newContact } = useContext(ContactsContext);
  const { register, handleSubmit } = useForm();

  const token = window.localStorage.getItem("@token");

  const decoded = jwt_decode<DecodedToken>(token!);

  const clientId = decoded.sub;

  const onSubmit = async (data: any) => {
    newContact(data, clientId);
  };

  return (
    <StyledModalContainer>
      <div>
        <div>
          <StyledH4>Adicionar Contato</StyledH4>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name-contato">Nome</label>
          <input
            type="text"
            id="name-contato"
            {...register("name")}
            placeholder="Nome"
          />
          <label htmlFor="email-contato">Email</label>
          <input
            type="email"
            id="email-contato"
            {...register("email")}
            placeholder="Email"
          />
          <label htmlFor="phone-contato">Telefone</label>
          <input
            type="text"
            id="phone-contato"
            {...register("phone")}
            placeholder="Telefone"
          />
          <StyledButtonPrimary type="submit">
            {loading ? "Enviando..." : "Adicionar Contato"}
          </StyledButtonPrimary>
        </StyledForm>
      </div>
    </StyledModalContainer>
  );
};
