import UserDTO from "../dtos/UserDTO";
import UserRepository from "../repositories/UserRepository";
import MyCustomErrors from "../helpers/MyCustomErrors";

export default class UserService {
  protected userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async create(userDTO: UserDTO): Promise<object> {
    const emailUserExists = await this.userRepository.findForEmail(
      userDTO.email
    );

    if (emailUserExists) {
      throw new MyCustomErrors("Email já cadastrado.", 409);
    }

    const cpfUserExists = await this.userRepository.findForCpf(userDTO.cpf);

    if (cpfUserExists) {
      throw new MyCustomErrors("CPF já cadastrado.", 409);
    }

    await this.userRepository.create(userDTO);

    return {
      message: "Usuário cadastrado com sucesso!",
    };
  }
}
