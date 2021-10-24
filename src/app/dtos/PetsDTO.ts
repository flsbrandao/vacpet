import BreedsModel from "../models/BreedsModel";
import { SexoType } from "../models/PetsModel";
import SpeciesModel from "../models/SpeciesModel";
import UserModel from "../models/UserModel";

export default interface PetsDTO{
    user: UserModel;
    foto?: string;
    nome: string;
    specie: SpeciesModel;
    sexo: SexoType,
    breed: BreedsModel,
    data_nascimento: Date
}