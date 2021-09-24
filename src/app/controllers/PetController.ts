import{ Request, Response} from 'express';
class PetController{
  public async index(req: Request, res : Response) : Promise<Response>{

    return res.send('Cabra da peste!');
  }

}

export default new PetController();