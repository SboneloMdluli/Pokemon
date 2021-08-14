export class Pokemon{
    public name: string;
    public image: string;
    public index: string;

    constructor(index: string,name: string, imgpth:string){
        this.index =  index;
        this.name = name;
        this.image = imgpth
    }

}