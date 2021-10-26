import BreedsModel from "../models/BreedsModel";
import { SexoType } from "../models/PetsModel";
import SpeciesModel from "../models/SpeciesModel";
import UserModel from "../models/UserModel";
import DTO from "./DTO";

export default class PetsDTO extends DTO {
  public user: UserModel;
  public nome: string;
  public specie: SpeciesModel;
  public sexo: SexoType;
  public breed: BreedsModel;
  public data_nascimento: Date;
  public foto?: string;

  static withID(user: UserModel) : PetsDTO {
    const petsDTO = new PetsDTO();
    petsDTO.user = user;
    return petsDTO;
  }

  static withAll(
    user: UserModel,
    nome: string,
    specie: SpeciesModel,
    sexo: SexoType,
    breed: BreedsModel,
    data_nascimento: Date,
    foto?: string
  ): PetsDTO {
    const petsDTO = new PetsDTO();
    petsDTO.user = user;
    petsDTO.nome = nome;
    petsDTO.specie = specie;
    petsDTO.sexo = sexo;
    petsDTO.breed = breed;
    petsDTO.data_nascimento = data_nascimento;
    petsDTO.foto = foto;

    return petsDTO;
  }
}
