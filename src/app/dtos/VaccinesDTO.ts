import SpeciesModel from "../models/SpeciesModel";
import DTO from "./DTO";

export default class VaccinesDTO extends DTO {
  public id: string;
  public nome: string;
  public specie: SpeciesModel;
  public doses_primarias: number;
  public intervalo_doses_primarias: number;
  public intervalo_revacinacao: number;

  static withSpecie(id: number): VaccinesDTO {
    const vaccinesDTO = new VaccinesDTO();
    vaccinesDTO.specie = SpeciesModel.withID(id);
    return vaccinesDTO;
  }
}
