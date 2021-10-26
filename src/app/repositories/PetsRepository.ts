import { Connection, getRepository } from "typeorm";
import PetsDTO from "../dtos/PetsDTO";
import PetsModel from "../models/PetsModel";

export default class PetsRepository {
  public async create(petsDTO: PetsDTO): Promise<PetsModel> {
    return await PetsModel.create(petsDTO).save();
  }

  public async findForUser(petsDTO: PetsDTO): Promise<PetsModel[]> {
    return await PetsModel.find({ relations: ["user", "breed", "specie"] });
  }
}
