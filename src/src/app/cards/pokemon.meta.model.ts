import { Pokemon } from "./pokemon.model";

export class pokemonMetaData extends Pokemon {
    public stats: {};
    public weight: number;
    public height: number;
    public description: string;
    public abilities: string;


    constructor(stats: {},weight: number,height: number,description: string,abilities: string){
        super("","","");
        this.stats = stats;
        this.weight = weight;
        this.height = height;
        this.description = description,
        this.abilities; abilities
    }

}