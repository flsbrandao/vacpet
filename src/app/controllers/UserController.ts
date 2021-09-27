import { Request, Response, NextFunction, } from 'express';
import UserDTO from '../dtos/UserDTO';
import UserService from '../services/UserService';


class UserController {

  public async create(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined | void >{

    try {
      const { nome, cpf, email, endereco, celular, telefone } = req.body;

      const userDTO = new UserDTO(nome, cpf, email, endereco, celular, telefone);

      const userService = new UserService();
      const response = await userService.create(userDTO);

      return res.status(201).json(response);

    } catch (err) {
      console.log(err)
      return next(err);
    }
  }

}

export default new UserController();