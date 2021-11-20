import VaccinesDTO from "../dtos/VaccinesDTO";
import VaccinesModel from "../models/VaccinesModel";

export default class VaccinesRepository {
  public async vaccinesForSpecie(
    vaccinesDTO: VaccinesDTO
  ): Promise<VaccinesModel[]> {
    return await VaccinesModel.find({ where: { specie: vaccinesDTO.specie } });
  }
}
