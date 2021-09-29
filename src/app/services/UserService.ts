import UserDTO from "../dtos/UserDTO";
import UserRepository from "../repositories/UserRepository";
import MyCustomErrors from "../helpers/MyCustomErrors";

class UserService {

  public async create(userDTO: UserDTO) : Promise<object>{

    const userRepository = new UserRepository();

    const emailUserExists = await userRepository.findForEmail(userDTO.email);

    if (emailUserExists){
      throw new MyCustomErrors("Email já cadastrado.", 409);
    }

    const cpfUserExists = await userRepository.findForCpf(userDTO.cpf);

    if(cpfUserExists){
      throw new MyCustomErrors("CPF já cadastrado.", 409);
    }

    await userRepository.create(userDTO);

    return {
      message: "Usuário cadastrado com sucesso!",
      success: true
    }

  }

}

export default UserService;