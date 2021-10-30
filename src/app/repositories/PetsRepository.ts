import PetsDTO from "../dtos/PetsDTO";
import PetsModel from "../models/PetsModel";

export default class PetsRepository {
  public async create(petsDTO: PetsDTO): Promise<PetsModel> {
    return await PetsModel.create(petsDTO).save();
  }

  public async findForUser(petsDTO: PetsDTO): Promise<PetsModel[]> {
    return await PetsModel.find({
      relations: ["user", "breed", "specie"],
      where: { user: petsDTO.user },
    });
  }

  public async findForId(petsDTO: PetsDTO): Promise<PetsModel | undefined>{
    return await PetsModel.findOne({ where: {id: petsDTO.id}, relations : ["user", "breed", "specie"] });
  }
}
