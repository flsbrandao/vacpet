import SpecieDTO from "../dtos/SpecieDTO";
import BreedsModel from "../models/BreedsModel";
import BreedsRepository from "../repositories/BreedsRepository";

export default class BreedsService {
  protected breedsRepository: BreedsRepository;

  constructor() {
    this.breedsRepository = new BreedsRepository();
  }
  public async findForSpecie(specie: SpecieDTO): Promise<BreedsModel[]> {
    return this.breedsRepository.findForSpecies(specie);
  }
}
