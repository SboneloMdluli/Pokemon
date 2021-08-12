import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable({providedIn:'root'})

export class getPokemon {
    
    constructor(private http:HttpClient){}

    fetchPokemon(){
       return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
       .pipe(map(res=>{
        
       return res['results']
        
       }))

    }
}

