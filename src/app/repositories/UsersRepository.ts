import UsersDTO from "../dtos/UsersDTO";
import UsersModel from "../models/UsersModel";

export default class UserRepository {
  public async create(userDTO: UsersDTO): Promise<UsersModel> {
    return await UsersModel.create(userDTO).save();
  }

  public async findForEmail(email: string): Promise<UsersModel | undefined> {
    return await UsersModel.findOne({ where: { email } });
  }

  public async findForCpf(cpf: string): Promise<UsersModel | undefined> {
    return await UsersModel.findOne({ where: { cpf } });
  }

  public async find(): Promise<UsersModel[]>{
    return await UsersModel.find();
  }

  public async findForId(userDTO: UsersDTO) : Promise<UsersModel | undefined> {
    return await UsersModel.findOne({where:{id: userDTO.id}});
  }
}
