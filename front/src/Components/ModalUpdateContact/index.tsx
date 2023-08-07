import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ClientsContext } from "../../Contexts/clientContext/clientContext";
import { ContactsContext } from "../../Contexts/contactContext/contactContext";
import { StyledButtonPrimary } from "../../Styles/buttons";
import { StyledForm } from "../../Styles/form";
import { StyledH4 } from "../../Styles/typography";
import { StyledModalContainer } from "./style";

export const ModalEditContact = () => {
  const { loading } = useContext(ClientsContext);
  const { updateContact, contactSelected, setModalEdit } =
    useContext(ContactsContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: contactSelected.name,
      email: contactSelected.email,
      phone: contactSelected.phone,
    },
  });

  const onSubmit = async (data: any) => {
    updateContact(data, contactSelected.id);
    setModalEdit(false);
  };

  return (
    <StyledModalContainer>
      <div>
        <div>
          <StyledH4>Alterar Contato</StyledH4>
          <button onClick={() => setModalEdit(false)}>X</button>
        </div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name-contato">Nome</label>
          <input
            type="text"
            id="name-contato"
            {...register("name")}
            placeholder="nome"
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
          <div className="div-buttons">
            <StyledButtonPrimary type="submit">
              {loading ? "Salvando..." : "Salvar alterações"}
            </StyledButtonPrimary>
          </div>
        </StyledForm>
      </div>
    </StyledModalContainer>
  );
};
