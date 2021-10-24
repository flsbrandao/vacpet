import DTO from "./DTO";

export default class UserDTO extends DTO{
  constructor(
    public nome : string,
    public cpf : string, 
    public email : string, 
    public endereco: string,
    public celular : string,
    public telefone: string = ''
  ){
    super();
    this.cpf = this.onlyNumbers(cpf);
    this.celular = this.onlyNumbers(celular);
    if(telefone){
      this.telefone = this.onlyNumbers(telefone);
    }
  }
}

// export default interface UserDTO {
//   nome: string;
//   cpf: string;
//   email: string;
//   endereco: string;
//   celular: string;
//   telefone: string;
// }
