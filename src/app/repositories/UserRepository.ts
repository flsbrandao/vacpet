import UserDTO from "../dtos/UserDTO";
import UserModel from "../models/UserModel";

export default class UserRepository {
  async create(userDTO: UserDTO): Promise<UserModel> {
    return await UserModel.create(userDTO).save();
  }

  public async findForEmail(email: string): Promise<UserModel | undefined> {
    return await UserModel.findOne({ where: { email } });
  }

  public async findForCpf(cpf: string): Promise<UserModel | undefined> {
    return await UserModel.findOne({ where: { cpf } });
  }
}
