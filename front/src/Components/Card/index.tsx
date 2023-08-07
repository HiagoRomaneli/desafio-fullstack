import { useContext } from "react";
import { ClientsContext } from "../../Contexts/clientContext/clientContext";
import { ContactsContext } from "../../Contexts/contactContext/contactContext";
import { StyledH4, StyledH5 } from "../../Styles/typography";
import deleteButton from "../../assets/delete.png";
import editButton from "../../assets/editfilebutton.svg";
import { StyledLi } from "./style";

export const Card = () => {
  const { client } = useContext(ClientsContext);
  const { selectedContact, deleteContact } = useContext(ContactsContext);

  return (
    <>
      {client?.contacts.length != 0 ? (
        client?.contacts.map((contact, index) => (
          <StyledLi key={index}>
            <StyledH4>{`Nome: ${contact.name}`}</StyledH4>
            <StyledH4>{`Email: ${contact.email}`}</StyledH4>
            <StyledH4>{`Telefone: ${contact.phone}`}</StyledH4>
            <div>
              <button onClick={() => selectedContact(contact)}>
                <img src={editButton} alt="botao de editar contato" />
              </button>
              <button onClick={() => deleteContact(contact.id)}>
                <img src={deleteButton} alt="botao de deletar contato" />
              </button>
            </div>
          </StyledLi>
        ))
      ) : (
        <StyledH5>Adicione novos Contatos!</StyledH5>
      )}
    </>
  );
};
