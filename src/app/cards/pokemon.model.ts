export class Pokemon{
    public name: string;
    public description: string;
    public image: string;

    constructor(name: string, desc: string, imgpth:string){
        this.name = name;
        this.description = desc;
        this.image = imgpth
    }

}