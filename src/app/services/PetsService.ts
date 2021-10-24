import PetsDTO from "../dtos/PetsDTO";
import PetsRepository from "../repositories/PetsRepository";

export default class PetsService{
    public async create(petsDTO: PetsDTO) : Promise<object>{

        const petsRepository = new PetsRepository();

        await petsRepository.create(petsDTO);
        return {
            message: "Pet cadastrado com sucesso!"
        }
    }
}