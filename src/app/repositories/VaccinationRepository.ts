import VaccinationDTO from "../dtos/VaccinationDTO";
import VaccinationModel from "../models/VaccinationModel";

export default class VaccinatioonRepository {
  public async create(vaccinationDTO: VaccinationDTO): Promise<VaccinationModel> {
    return await VaccinationModel.create(vaccinationDTO).save();
  }
}
