import DTO from "./DTO";

class UserDTO extends DTO{
  constructor(
    public nome : string,
    public cpf : string, 
    public email : string, 
    public endereco: string,
    public celular : string,
    public telefone: string | null = null 
  ){
    super();
    this.cpf = this.onlyNumbers(cpf);
    this.celular = this.onlyNumbers(celular);
    if(telefone){
      this.telefone = this.onlyNumbers(telefone);
    }
  }
}

export default UserDTO;