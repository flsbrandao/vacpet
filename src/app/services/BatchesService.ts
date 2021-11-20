import BatchesDTO from "../dtos/BatchesDTO";
import BatchesModel from "../models/BatchesModel";
import BatchesRepository from "../repositories/BatchesRepository";

export default class BatchesService {
  protected batchesRepository: BatchesRepository;

  constructor() {
    this.batchesRepository = new BatchesRepository();
  }

  public async findForVaccineOnlyValid(batchesDTO: BatchesDTO): Promise<BatchesModel[]> {
    return await this.batchesRepository.findForVaccineOnlyValid(batchesDTO)
  }
}
