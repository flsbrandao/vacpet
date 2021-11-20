import ManufacturersModel from "../models/ManufacturersModel";
import VaccinesModel from "../models/VaccinesModel";
import DTO from "./DTO";

export default class BatchesDTO extends DTO {
  public id: string;
  public codigo_lote: string;
  public vaccines: VaccinesModel;
  public manufacturer: ManufacturersModel;
  public data_fabricacao: Date;
  public data_vencimento: Date;
  public quantidade: number;

  static withVaccine(id: number): BatchesDTO{
    const batchesDTO = new BatchesDTO();
    batchesDTO.vaccines = VaccinesModel.withID(id);
    return batchesDTO;
  }
}
