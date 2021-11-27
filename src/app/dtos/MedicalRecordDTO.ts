import { PorteType } from "../models/MedicalRecordModel";
import PetsModel from "../models/PetsModel";
import DTO from "./DTO";

export default class MedicalRecordDTO extends DTO {
  public id: string;
  public pet: PetsModel;
  public alergia: string;
  public doenca: string;
  public peso: number;
  public medicamentos: string;
  public pelagem: string;
  public porte: PorteType;
  public parasitario_interno: string;
  public parasitario_externo: string;

  static withAll(
    pet: string,
    alergia: string,
    doenca: string,
    peso: string,
    medicamentos: string,
    pelagem: string,
    porte: string,
    parasitario_interno: string,
    parasitario_externo: string
  ): MedicalRecordDTO {
    const medicalRecordDTO = new MedicalRecordDTO();

    medicalRecordDTO.pet = PetsModel.withID(pet);
    medicalRecordDTO.alergia = alergia;
    medicalRecordDTO.doenca = doenca;
    medicalRecordDTO.peso = parseFloat(peso);
    medicalRecordDTO.medicamentos;
    medicalRecordDTO.porte =
      porte == "P" ? PorteType.P : porte == "M" ? PorteType.M : PorteType.G;
    medicalRecordDTO.medicamentos = medicamentos;
    medicalRecordDTO.pelagem = pelagem;
    medicalRecordDTO.parasitario_interno = parasitario_interno;
    medicalRecordDTO.parasitario_externo = parasitario_externo;

    return medicalRecordDTO;
  }
}
