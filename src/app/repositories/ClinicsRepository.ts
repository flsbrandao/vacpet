import ClinicsModel from "../models/ClinicsModel";

export default class ClinicsRepository {
  public async find(): Promise<ClinicsModel[]> {
    return await ClinicsModel.find();
  }
}
