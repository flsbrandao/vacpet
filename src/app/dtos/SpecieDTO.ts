import DTO from "./DTO";

export default class SpecieDTO extends DTO{
    public id : number;
    public nome: string;

    static withID(id: number){
        const specieDTO = new SpecieDTO();
        specieDTO.id = id;
        return specieDTO;
    }
}