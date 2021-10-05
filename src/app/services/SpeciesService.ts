import SpeciesRepository from "../repositories/SpeciesRepository";

class SpeciesService{

  public async find() : Promise<Object>{
    const speciesRepository = new SpeciesRepository();

    return speciesRepository.find();
  }

}

export default SpeciesService;