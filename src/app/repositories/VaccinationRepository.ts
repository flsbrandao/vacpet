import { getManager, getRepository } from "typeorm";
import VaccinationDTO from "../dtos/VaccinationDTO";
import VaccinationModel from "../models/VaccinationModel";

export default class VaccinatioonRepository {
  public async create(
    vaccinationDTO: VaccinationDTO
  ): Promise<VaccinationModel> {
    return await VaccinationModel.create(vaccinationDTO).save();
  }

  public async findForPet(vaccinationDTO: VaccinationDTO): Promise<any[]> {
    return await getManager()
      .createQueryBuilder("vaccination", "t1")
      .select(["t1.id", "t1.data_vacinacao"])
      .addSelect("t2.nome", "veterinario")
      .addSelect("t3.nome", "clinica")
      .addSelect("t4.codigo_lote", "codigo_lote")
      .addSelect("t5.nome", "vacina")
      .innerJoin("veterinarians", "t2", "t1.veterinaryId = t2.id")
      .innerJoin("clinics", "t3", "t1.clinicId = t3.id")
      .innerJoin("batches", "t4", "t1.batcheId = t4.id")
      .innerJoin("vaccines", "t5", "t4.vaccineId = t5.id")
      .where("t1.petId = :pet ", { pet: vaccinationDTO.pet.id})
      .getRawMany();
  }
}
