import PetsDTO from "../dtos/PetsDTO";
import PetsModel from "../models/PetsModel";
import PetsRepository from "../repositories/PetsRepository";

export default class PetsService {
  protected petsRepository: PetsRepository;

  constructor() {
    this.petsRepository = new PetsRepository();
  }
  public async create(petsDTO: PetsDTO): Promise<object> {
    await this.petsRepository.create(petsDTO);
    return {
      message: "Pet cadastrado com sucesso!",
    };
  }

  public async findForUser(petsDTO: PetsDTO) : Promise<PetsModel[]>{
    return await this.petsRepository.findForUser(petsDTO);
  }

  public async findForId(petsDTO: PetsDTO) : Promise<PetsModel | undefined>{
    return await this.petsRepository.findForId(petsDTO);
  }
}
