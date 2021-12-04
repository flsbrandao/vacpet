import { LoginType } from "../models/LoginModel";
import DTO from "./DTO";

export default class LoginDTO extends DTO {
  public id: string;
  public userId: string;
  public email: string;
  public password: string;
  public tipo: LoginType;

  static withAll(
    userId: string,
    email: string,
    password: string,
    tipo: string,
    id?: string
  ): LoginDTO {
    const loginDTO = new LoginDTO();
    if (id) loginDTO.id = id;
    loginDTO.userId = userId;
    loginDTO.email = email;
    loginDTO.password = password;
    loginDTO.tipo = tipo == "V" ? LoginType.V : LoginType.U;
    return loginDTO;
  }
}
