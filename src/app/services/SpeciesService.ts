import SpeciesModel from "../models/SpeciesModel";
import SpeciesRepository from "../repositories/SpeciesRepository";

export default class SpeciesService{

  public async find() : Promise<SpeciesModel[]>{
    const speciesRepository = new SpeciesRepository();

    return speciesRepository.find();
  }

}
