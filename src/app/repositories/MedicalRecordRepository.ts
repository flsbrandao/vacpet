import { UpdateResult } from "typeorm";
import MedicalRecordDTO from "../dtos/MedicalRecordDTO";
import MedicalRecordModel from "../models/MedicalRecordModel";

export default class MedicalRecordRepostory {
  public async create(
    medicalRecordDTO: MedicalRecordDTO
  ): Promise<MedicalRecordModel> {
    return await MedicalRecordModel.create(medicalRecordDTO).save();
  }

  public async update(
    medicalRecordDTO: MedicalRecordDTO
  ): Promise<UpdateResult> {
    return await MedicalRecordModel.update(
      medicalRecordDTO.pet,
      medicalRecordDTO
    );
  }
}
