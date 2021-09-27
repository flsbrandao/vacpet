import { getRepository, Repository } from 'typeorm';
import UserDTO from "../dtos/UserDTO";
import UserModel from "../models/UserModel";

class UserRepository {

  private repository: any;

  constructor() {
    this.repository = getRepository(UserModel);
  }

  async create(userDTO: UserDTO) : Promise<Repository<UserModel>> {
    const user = this.repository.create({
      nome: userDTO.nome,
      cpf: userDTO.cpf,
      email: userDTO.email,
      endereco: userDTO.endereco,
      telefone: userDTO.telefone,
      celular: userDTO.celular
    });
    await this.repository.save(user);
    return user;
  }

  public async findForEmail(email : string) : Promise<Repository<UserModel>>{
    return await this.repository.findOne({ where: { email } });
  }

  public async findForCpf(cpf: string) : Promise<Repository<UserModel>>{
    return await this.repository.findOne({ where: { cpf } });
  }

}

export default UserRepository;