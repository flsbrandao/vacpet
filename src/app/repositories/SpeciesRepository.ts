import SpeciesModel from "../models/SpeciesModel";

export default class SpeciesRepository {
  public async find(): Promise<SpeciesModel[]> {
    return await SpeciesModel.find({select: ["id","nome"]});
  }
}
