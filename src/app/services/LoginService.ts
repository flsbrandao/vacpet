import LoginDTO from "../dtos/LoginDTO";
import LoginModel from "../models/LoginModel";
import LoginRepository from "../repositories/LoginRepository";

export default class LoginService {
  protected loginRepostory: LoginRepository;

  constructor() {
    this.loginRepostory = new LoginRepository();
  }

  public async create(loginDTO: LoginDTO): Promise<LoginModel> {
    return await this.loginRepostory.create(loginDTO);
  }
}
