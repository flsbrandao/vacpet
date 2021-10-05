import {getRepository, Repository} from 'typeorm';
import SpeciesModel from '../models/SpeciesModel';

class SpeciesRepository{

  
  private repository: any;

  constructor() {
    this.repository = getRepository(SpeciesModel);
  }

  public async find() : Promise<Repository<SpeciesModel>>{
    return await this.repository.find()
  }
}

export default SpeciesRepository;