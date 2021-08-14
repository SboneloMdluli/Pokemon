export class pokemonMetaData {
    public stats: {};
    public weight: string;
    public height: string;
    public description: string;
    public abilities: string;
    public name: string;
    public image: string;
    public index: string;

    constructor(index: string,name: string, imgpth:string,stats: {},weight: string,height: string,description: string,abilities: string){
        this.stats = stats;
        this.weight = weight;
        this.height = height;
        this.description = description,
        this.abilities; abilities;
        this.index =  index;
        this.name = name;
        this.image = imgpth
    }

}