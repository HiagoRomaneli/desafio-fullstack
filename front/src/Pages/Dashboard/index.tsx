import jwt_decode from "jwt-decode";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card";
import { ModalNewContact } from "../../Components/ModalNewContact";
import { ModalEditContact } from "../../Components/ModalUpdateContact";
import { ClientsContext } from "../../Contexts/clientContext/clientContext";
import { ContactsContext } from "../../Contexts/contactContext/contactContext";
import {
  StyledButtonNewContact,
  StyledButtonTertiary,
} from "../../Styles/buttons";
import { StyledHeader } from "../../Styles/header";
import { StyledH2, StyledH3, StyledSpan } from "../../Styles/typography";
import { StyledDivClient, StyledDivHeaderContacts, StyledUl } from "./style";

interface DecodedToken {
  sub: number;
}

export const Dashboard = () => {
  const navigate = useNavigate();
  const { setModal, modal, getClientById, client, clientContacts } =
    useContext(ClientsContext);
  const { modalEdit } = useContext(ContactsContext);

  const token = window.localStorage.getItem("@token");

  const decoded = jwt_decode<DecodedToken>(token!);

  const clientId = decoded.sub;

  useEffect(() => {
    getClientById(clientId);
  }, [clientContacts]);

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <StyledHeader>
        <h1>Agenda Kenzie</h1>
        <StyledButtonTertiary
          onClick={() => {
            logout();
          }}
        >
          Sair
        </StyledButtonTertiary>
      </StyledHeader>
      <StyledDivClient>
        <StyledH2>{`Olá,  ${client?.name}`}</StyledH2>
        <StyledSpan>{`Email: ${client?.email}`}</StyledSpan>
        <StyledSpan>{`Telefone: ${client?.phone}`}</StyledSpan>
      </StyledDivClient>
      <StyledDivHeaderContacts>
        <StyledH3>Contatos</StyledH3>
        <StyledButtonNewContact onClick={() => setModal(true)}>
          +
        </StyledButtonNewContact>
      </StyledDivHeaderContacts>
      <StyledUl>
        <Card />
      </StyledUl>
      {modal && <ModalNewContact />}
      {modalEdit && <ModalEditContact />}
    </>
  );
};
