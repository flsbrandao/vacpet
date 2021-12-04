import BatchesModel from "../models/BatchesModel";
import ClinicsModel from "../models/ClinicsModel";
import PetsModel from "../models/PetsModel";
import VeretinariansModel from "../models/VeterinariansModel";
import DTO from "./DTO";

export default class VaccinationDTO extends DTO {
  public id: string;
  public pet: PetsModel;
  public batche: BatchesModel;
  public veterinary: VeretinariansModel;
  public clinic: ClinicsModel;
  public data_vacinacao: Date;

  static withAll(
    pet: string,
    batche: string,
    veterinary: string,
    clinic: string,
    data_vacinacao: string
  ): VaccinationDTO {
    const vaccinationDTO = new VaccinationDTO();

    vaccinationDTO.pet = PetsModel.withID(pet);
    vaccinationDTO.batche = BatchesModel.withID(batche);
    vaccinationDTO.veterinary = VeretinariansModel.withID(veterinary);
    vaccinationDTO.clinic = ClinicsModel.withID(clinic);
    vaccinationDTO.data_vacinacao = vaccinationDTO.addDayToTheDate(data_vacinacao);

    return vaccinationDTO;
  }

  static withPet(pet:string){
    const vaccinationDTO = new VaccinationDTO();
    vaccinationDTO.pet =  PetsModel.withID(pet);
    return vaccinationDTO;
  }
}
