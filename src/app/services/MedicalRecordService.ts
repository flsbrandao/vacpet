import MedicalRecordRepostory from "../repositories/MedicalRecordRepository";

export default class MedicalRecordService {
  protected medicalRecordRepository: MedicalRecordRepostory;

  constructor() {
    this.medicalRecordRepository = new MedicalRecordRepostory();
  }

  public async create(){

  }

  public async update(){
      
  }
}
