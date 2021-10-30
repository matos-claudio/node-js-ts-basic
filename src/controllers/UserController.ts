import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    id: 1,
    name: "Claudio",
    email: "cloud.devmob@gmail.com",
  },
  {
    id: 2,
    name: "Patricia",
    email: "pathcau16@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "Claudio Matos", email: "cloud.devmob@gmail.com" },
      message: {
        subject: "Seja bem vindo",
        body: "Estamos felizes pelo seu cadastro",
      },
    });
    res.send();
  },
};
