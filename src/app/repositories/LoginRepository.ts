import LoginDTO from "../dtos/LoginDTO";
import LoginModel from "../models/LoginModel";

export default class LoginRepository {
  public async create(loginDTO: LoginDTO) {
    return await LoginModel.create(loginDTO).save();
  }

  public async findForEmail(email: string): Promise<LoginModel | undefined> {
    return await LoginModel.findOne({
      where: {
        email,
      },
    });
  }
}
