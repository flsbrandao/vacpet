import UserDTO from "../dtos/UserDTO";
import UserModel from "../models/UserModel";

export default class UserRepository {
  async create(userDTO: UserDTO): Promise<UserModel> {
    const user = await UserModel.create(userDTO).save();

    return user;
  }

  public async findForEmail(email: string): Promise<UserModel | undefined> {
    return await UserModel.findOne({ where: { email } });
  }

  public async findForCpf(cpf: string): Promise<UserModel | undefined> {
    return await UserModel.findOne({ where: { cpf } });
  }
}
