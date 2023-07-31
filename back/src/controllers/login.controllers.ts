import { Request, Response } from "express";
import { createLoginService } from "../services/login/createLogin.services";

export const createLoginController = async (
  request: Request,
  response: Response
) => {
  const loginData = request.body;

  const token = await createLoginService(loginData);

  return response.json({
    token: token,
  });
};
