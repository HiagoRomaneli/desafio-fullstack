import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../Components/RegisterForm";
import { StyledButtonTertiary } from "../../Styles/buttons";
import { StyledRegisterPage } from "./style";

export const Register = () => {
  const navigate = useNavigate();
  const backPage = () => {
    navigate(-1);
  };
  return (
    <>
      <StyledRegisterPage>
        <h1>Registre-se</h1>
        <StyledButtonTertiary onClick={backPage}>Voltar</StyledButtonTertiary>
      </StyledRegisterPage>
      <RegisterForm />
    </>
  );
};
