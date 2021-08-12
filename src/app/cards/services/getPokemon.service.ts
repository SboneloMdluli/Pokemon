import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable({providedIn:'root'})

export class getPokemon {
    
    constructor(private http:HttpClient){}

    fetchPokemon(){
       return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
       .pipe(map(res=>{
        
       return res['results'].map(pokemon=> {

            const {name , url} = pokemon;
            const index = url.split('/')[url.split('/').length -2]
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
            return {name, image}
        });  
        
       }))
    }
}

