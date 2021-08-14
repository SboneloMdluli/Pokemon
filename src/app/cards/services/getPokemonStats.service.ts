import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'
import { Pokemon } from "../pokemon.model";
import axios from "axios";

@Injectable({providedIn:'root'})

export class clickedPokemon {
    
    constructor(private http:HttpClient){}
    Stuff : Pokemon
    description: string
    fetchStats(pokemon){
        this.Stuff = pokemon
    }

     getPokemon(){
        
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.Stuff.name}`).then(res=>{
            res.data.flavor_text_entries.some(text=>{
                if(text.language.name=='en'){
                    this.description = text.flavor_text
                    
                }
            })
        })

        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.Stuff.name}`)
        
        .pipe(map(res=>{
          
            const infoPokemon = {
                index: res['id'],
                name:this.Stuff.name,
                weight: res['weight'],
                height: res['height'],
                abilities: res['abilities'],
                stats: res['stats'],
                description: this.description,
                image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${res['id']}.png`
            }
     
            return infoPokemon
         
        }))
    }

}






