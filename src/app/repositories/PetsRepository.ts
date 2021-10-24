import PetsDTO  from "../dtos/PetsDTO";
import PetsModel from "../models/PetsModel";

export default class PetsRepository{
    public async create(petsDTO: PetsDTO) : Promise<PetsModel>{
        const pet = await PetsModel.create(petsDTO).save();
        return pet;
    }
}