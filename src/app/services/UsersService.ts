import UsersDTO from "../dtos/UsersDTO";
import UsersRepository from "../repositories/UsersRepository";
import MyCustomErrors from "../helpers/MyCustomErrors";
import UsersModel from "../models/UsersModel";

export default class UserService {
  protected usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async create(userDTO: UsersDTO): Promise<object> {
    const emailUserExists = await this.usersRepository.findForEmail(
      userDTO.email
    );

    if (emailUserExists) {
      throw new MyCustomErrors("Email já cadastrado.", 409);
    }

    const cpfUserExists = await this.usersRepository.findForCpf(userDTO.cpf);

    if (cpfUserExists) {
      throw new MyCustomErrors("CPF já cadastrado.", 409);
    }

    await this.usersRepository.create(userDTO);

    return {
      message: "Usuário cadastrado com sucesso!",
    };
  }

  public async find() : Promise<UsersModel[]>{
    return await this.usersRepository.find();
  }

  public async findForId(usersDTO: UsersDTO) : Promise<UsersModel | undefined>{
    return await this.usersRepository.findForId(usersDTO);
  }
}
