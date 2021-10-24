import{ Request, Response, NextFunction} from 'express';
import BreedsModel from '../models/BreedsModel';
import { SexoType } from '../models/PetsModel';
import SpeciesModel from '../models/SpeciesModel';
import UserModel from '../models/UserModel';
import PetsService from '../services/PetsService';
class PetsController{
  public renderCreate(req: Request, res: Response, next: NextFunction) : void{
    try{
      return res.render("pages/user/register-pets");
    }catch(err){
      return next(err);
    }
  }

  public renderList(req: Request, res: Response, next: NextFunction) : void{
    try{
      return res.render("pages/user/list-pets");
    }catch(err){
      return next(err);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) : Promise<Response | void> {
    try{

      let data = {
        foto:'foto',
        nome: 'opa',
        user: UserModel.withID( '20f4d6e9-566e-4a05-8158-31dcb8288aed'),
        breed: BreedsModel.withID(1),
        specie: SpeciesModel.withID(1),
        sexo: SexoType.F,
        data_nascimento: new Date('2021-10-24')
      }

      console.log(data)
      const petsService = new PetsService();
      const response = await petsService.create(data);

      return res.status(201).json(response);
    }catch(err){
      return next(err);
    }
  }

}

export default new PetsController();