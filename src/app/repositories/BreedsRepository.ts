import BreedsModel from "../models/BreedsModel";

export default class BreedsRepository{
    public async findForSpecies(specie: any) : Promise<BreedsModel[]>{
       
        return await BreedsModel.find({where: {specieId : specie}, select: ["id","nome" ]});
    }
}