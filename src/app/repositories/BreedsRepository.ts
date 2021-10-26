import SpecieDTO from "../dtos/SpecieDTO";
import BreedsModel from "../models/BreedsModel";

export default class BreedsRepository{
    public async findForSpecies(specieDTO: SpecieDTO) : Promise<BreedsModel[]>{
       
        return await BreedsModel.find({where: {specieId : specieDTO.id}, select: ["id","nome" ]});
    }
}