import ClinicsModel from "../models/ClinicsModel";
import ClinicsRepository from "../repositories/ClinicsRepository";

export default class ClinicsService {
  protected clinicsRepository: ClinicsRepository;

  constructor() {
    this.clinicsRepository = new ClinicsRepository();
  }

  public async find(): Promise<ClinicsModel[]> {
    return await this.clinicsRepository.find();
  }
}
