import BreedsModel from "../models/BreedsModel";
import BreedsRepository from "../repositories/BreedsRepository";

export default class BreedsService {
  public async findForSpecie(specie: any): Promise<BreedsModel[]> {
    const breedsRepository = new BreedsRepository();
    return breedsRepository.findForSpecies(specie);
  }
}
