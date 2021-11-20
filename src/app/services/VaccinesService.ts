import PetsDTO from "../dtos/PetsDTO";
import VaccinesDTO from "../dtos/VaccinesDTO";
import MyCustomErrors from "../helpers/MyCustomErrors";
import SpeciesModel from "../models/SpeciesModel";
import VaccinesModel from "../models/VaccinesModel";
import VaccinesRepository from "../repositories/VaccinesRepository";
import PetsService from "./PetsService";

export default class VaccinesService {
  protected vaccinesRepository: VaccinesRepository;
  constructor() {
    this.vaccinesRepository = new VaccinesRepository();
  }

  public async vaccinesForSpecie(petsDTO: PetsDTO): Promise<VaccinesModel[]> {
    const petsService = new PetsService();

    const pet = await petsService.findForId(petsDTO);
    const vaccinesDTO = new VaccinesDTO();
    
    if (pet?.specie instanceof SpeciesModel) {

      vaccinesDTO.specie = pet.specie;
      return await this.vaccinesRepository.vaccinesForSpecie(vaccinesDTO);

    } else {

      throw new MyCustomErrors(
        "Erro ao buscar vacinas para essa espécie.",
        404
      );
    }
  }
}
