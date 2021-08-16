import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'
import { Pokemon } from "../pokemon.model";
import axios from "axios";

@Injectable({providedIn:'root'})

export class clickedPokemon {
    
    constructor(private http:HttpClient){}
    pokemonInfo : Pokemon
    description: string
    fetchStats(pokemon){
        this.pokemonInfo = pokemon
    }
    
 
     getPokemon(){
        
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.pokemonInfo.name.toLowerCase()}`).then(res=>{
            res.data.flavor_text_entries.some(text=>{
                if(text.language.name=='en'){
                    this.description = text.flavor_text
                    
                }
            })
        })

        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonInfo.name.toLowerCase()}`)
        
        .pipe(map(res=>{

            let  hp: string, attack: string, defense: string, speed: string, specialAttack: string, specialDefense: string 

            res['stats'].map(stat => {
              switch (stat.stat.name) {
                case 'hp':
                  hp = stat['base_stat'];
                  break;
                case 'attack':
                  attack = stat['base_stat'];
                  break;
                case 'defense':
                  defense = stat['base_stat'];
                  break;
                case 'speed':
                  speed = stat['base_stat'];
                  break;
                case 'special-attack':
                  specialAttack = stat['base_stat'];
                  break;
                case 'special-defense':
                  specialDefense = stat['base_stat'];
                  break;
                default:
                  break;
              }
            });


            const abilities = res['abilities']
            .map(ability => {
              return ability.ability.name
                .toLowerCase()
                .split('-')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            })
            .join(', ');

            const infoPokemon = {
                index: res['id'],
                name:this.pokemonInfo.name,
                weight: `weight: ${res['weight']}`,
                height: `height: ${res['height']}`,
                abilities: abilities,
                stats: `hp:${hp} attack:${attack} defense:${hp} speed:${speed} specialAttack:${specialAttack} specialDefense:${specialDefense}`,
                description: this.description,
                image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${res['id']}.png`
            }
     
            return infoPokemon
         
        }))
    }

}






