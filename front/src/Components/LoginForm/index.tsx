import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../Services/api";
import {
  StyledButtonPrimary,
  StyledButtonSecondary,
} from "../../Styles/buttons";
import { StyledForm } from "../../Styles/form";
import { StyledError, StyledH2, StyledSpan } from "../../Styles/typography";
import { StyledDivLogin } from "./style";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const signIn = async (data: any) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      localStorage.setItem("@token", token);

      setLoading(false);

      toast.success("Login feito com sucesso");

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const registerPage = () => {
    navigate("/register");
  };
  return (
    <StyledDivLogin>
      <StyledH2>Login</StyledH2>
      <StyledForm onSubmit={handleSubmit(signIn)}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Digite aqui seu email"
        />
        {errors.email && <StyledError>{errors.email.message}</StyledError>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Digite aqui sua senha"
        />
        {errors.password && (
          <StyledError>{errors.password.message}</StyledError>
        )}
        <StyledButtonPrimary type="submit">
          {loading ? "Entrando..." : "Entrar"}
        </StyledButtonPrimary>
      </StyledForm>
      <div>
        <StyledSpan>Ainda nao tem uma conta?</StyledSpan>
        <StyledButtonSecondary type="button" onClick={registerPage}>
          Cadastre-se
        </StyledButtonSecondary>
      </div>
    </StyledDivLogin>
  );
};
