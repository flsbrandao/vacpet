import MedicalRecordDTO from "../dtos/MedicalRecordDTO";
import MedicalRecordRepostory from "../repositories/MedicalRecordRepository";

export default class MedicalRecordService {
  protected medicalRecordRepository: MedicalRecordRepostory;

  constructor() {
    this.medicalRecordRepository = new MedicalRecordRepostory();
  }

  public async createOrUpdate(
    medicalRecordDTO: MedicalRecordDTO
  ): Promise<object> {
    const response = await this.medicalRecordRepository.findForPet(
      medicalRecordDTO
    );
   
    if (!response) {
      await this.medicalRecordRepository.create(medicalRecordDTO);
    } else {
      await this.medicalRecordRepository.update(medicalRecordDTO);
    }

    return { message: "Prontuário atualizado com sucesso!" };
  }
}
