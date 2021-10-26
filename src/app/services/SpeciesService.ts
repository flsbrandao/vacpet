import SpeciesModel from "../models/SpeciesModel";
import SpeciesRepository from "../repositories/SpeciesRepository";

export default class SpeciesService {
  protected speciesRepository: SpeciesRepository;

  constructor() {
    this.speciesRepository = new SpeciesRepository();
  }

  public async find(): Promise<SpeciesModel[]> {
    return this.speciesRepository.find();
  }
}
