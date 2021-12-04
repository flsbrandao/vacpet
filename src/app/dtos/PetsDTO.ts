import BreedsModel from "../models/BreedsModel";
import { SexoType } from "../models/PetsModel";
import SpeciesModel from "../models/SpeciesModel";
import UsersModel from "../models/UsersModel";
import DTO from "./DTO";

export default class PetsDTO extends DTO {
  public id: string;
  public user: UsersModel;
  public nome: string;
  public specie: SpeciesModel;
  public sexo: SexoType;
  public breed: BreedsModel;
  public data_nascimento: Date;
  public foto?: string;

  static withId(id: string): PetsDTO {
    const petsDTO = new PetsDTO();
    petsDTO.id = id;
    return petsDTO;
  }
  static withUser(user: string): PetsDTO {
    const petsDTO = new PetsDTO();
    petsDTO.user = UsersModel.withID(user);
    return petsDTO;
  }

  static withAll(
    user: string,
    nome: string,
    specie: number,
    sexo: string,
    breed: number,
    data_nascimento: string,
    foto?: string
  ): PetsDTO {
    const petsDTO = new PetsDTO();

    petsDTO.user = UsersModel.withID(user);
    petsDTO.nome = nome;
    petsDTO.specie = SpeciesModel.withID(specie);
    petsDTO.sexo = sexo == "M" ? SexoType.M : SexoType.F;
    petsDTO.breed = BreedsModel.withID(breed);
    petsDTO.data_nascimento = petsDTO.addDayToTheDate(data_nascimento);
    petsDTO.foto = foto;

    return petsDTO;
  }
}
