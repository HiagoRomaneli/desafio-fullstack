import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { api } from "../../Services/api";
import { StyledButtonPrimary } from "../../Styles/buttons";
import { StyledForm } from "../../Styles/form";
import { StyledError, StyledH2 } from "../../Styles/typography";
import { StyledDivRegister } from "./style";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Seu nome deve ter no mínimo 3 caracteres")
      .required("Nome obrigatório"),
    email: yup
      .string()
      .required("Email orbigatória")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Sua senha deve ter no mínimo 8 digitos")
      .matches(/(?=.*[A-Za-z])/, "Sua senha deve conter ao menos uma letra")
      .matches(/(?=.*[0-9])/, "Sua senha deve conter ao menos um número")
      .matches(
        /(?=.*[$*&@#])/,
        "Sua senha deve conter ao menos um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .required("Confirmar senha obrigatório")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
    phone: yup.string().required("Este campo é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = async (data: any) => {
    try {
      await api.post("/clients", data);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
    reset();
  };

  return (
    <StyledDivRegister>
      <StyledH2>Crie sua conta</StyledH2>
      <StyledForm onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name && <StyledError>{errors.name.message}</StyledError>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email && <StyledError>{errors.email.message}</StyledError>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Dgite aqui sua senha"
          {...register("password")}
        />
        {errors.password && (
          <StyledError>{errors.password.message}</StyledError>
        )}
        <label htmlFor="passwordConfirm">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <StyledError>{errors.passwordConfirm.message}</StyledError>
        )}
        <label htmlFor="contact">Telefone</label>
        <input type="text" placeholder="Telefone" {...register("phone")} />
        {errors.phone && <StyledError>{errors.phone.message}</StyledError>}
        <StyledButtonPrimary type="submit">Cadastrar</StyledButtonPrimary>
      </StyledForm>
    </StyledDivRegister>
  );
};
