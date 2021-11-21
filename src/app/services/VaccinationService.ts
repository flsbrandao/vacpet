import VaccinationDTO from "../dtos/VaccinationDTO";
import VaccinationModel from "../models/VaccinationModel";
import VaccinatioonRepository from "../repositories/VaccinationRepository";

export default class VaccinationService {
  protected vaccinationRepository: VaccinatioonRepository;

  constructor() {
    this.vaccinationRepository = new VaccinatioonRepository();
  }

  public async create(vaccinationDTO: VaccinationDTO): Promise<object> {
    await this.vaccinationRepository.create(vaccinationDTO);
    return { message: "Vacinação cadastrada com sucesso!" };
  }

  public async findForPet(vaccinationDTO: VaccinationDTO): Promise<any[]> {
    return await this.vaccinationRepository.findForPet(vaccinationDTO);
  }
}
