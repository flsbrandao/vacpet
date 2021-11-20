import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";
import BatchesDTO from "../dtos/BatchesDTO";
import BatchesModel from "../models/BatchesModel";

export default class BatchesRepository {
  public async findForVaccineOnlyValid(
    batchesDTO: BatchesDTO
  ): Promise<BatchesModel[]> {
    return await BatchesModel.find({
      where: {
        vaccine: batchesDTO.vaccines,
        quantidade: MoreThanOrEqual(1),
        data_vencimento: MoreThanOrEqual(new Date())
      },
    });
  }
}
