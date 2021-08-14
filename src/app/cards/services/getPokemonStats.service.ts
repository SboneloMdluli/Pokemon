import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'
import { Pokemon } from "../pokemon.model";
import { pokemonMetaData } from "../pokemon.meta.model";

@Injectable({providedIn:'root'})

export class clickedPokemon {
    
    constructor(private http:HttpClient){}
    pokemonInfo : pokemonMetaData
    Stuff : Pokemon

    fetchStats(pokemon){
        this.Stuff = pokemon
    }

    getPokemon(){
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.Stuff.name}`)

        .pipe(map(res=>{
            this.pokemonInfo
            return res['height']
         
        }))
    }

}






