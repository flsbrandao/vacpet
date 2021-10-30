import DTO from "./DTO";

export default class UsersDTO extends DTO {
  public id: string;
  public nome: string;
  public cpf: string;
  public email: string;
  public endereco: string;
  public celular: string;
  public telefone: string;

  static withAll(
    nome: string,
    cpf: string,
    email: string,
    endereco: string,
    celular: string,
    telefone: string = "",
    id: string = ""
  ): UsersDTO {
    const usersDTO = new UsersDTO();
    usersDTO.nome = nome;
    usersDTO.cpf = usersDTO.onlyNumbers(cpf);
    usersDTO.email = email;
    usersDTO.endereco = endereco;
    usersDTO.celular = usersDTO.onlyNumbers(celular);
    usersDTO.telefone = usersDTO.onlyNumbers(telefone);
    usersDTO.id = id;
    return usersDTO;
  }

  static withID(id:string): UsersDTO{
    const usersDTO = new UsersDTO();
    usersDTO.id = id;
    return usersDTO;
  }
}
