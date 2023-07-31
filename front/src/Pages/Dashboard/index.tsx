import { useNavigate } from "react-router-dom";
import { StyledButtonTertiary } from "../../Styles/buttons";
import { StyledHeader } from "../../Styles/header";
import { StyledH2, StyledH3 } from "../../Styles/typography";
import { StyledDivClient, StyledDivHeaderContacts, StyledUl } from "./style";

export const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <StyledHeader>
        <h1>Agenda</h1>
        <StyledButtonTertiary
          onClick={() => {
            logout();
          }}
        >
          Sair
        </StyledButtonTertiary>
      </StyledHeader>
      <StyledDivClient>
        <StyledH2>{`Olá,  name`}</StyledH2>
      </StyledDivClient>
      <StyledDivHeaderContacts>
        <StyledH3>Contatos</StyledH3>
      </StyledDivHeaderContacts>
      <StyledUl></StyledUl>
    </>
  );
};
