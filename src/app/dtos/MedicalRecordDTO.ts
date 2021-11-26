import { PorteType } from "../models/MedicalRecordModel";
import PetsModel from "../models/PetsModel";
import DTO from "./DTO";

export default class MedicalRecordDTO extends DTO {
  public id: string;
  public pet: PetsModel;
  public alergia: string;
  public doenca: string;
  public peso: number;
  public porte: PorteType;
  public parasitario_interno: string;
  public parasitario_externo: string;
  
}
