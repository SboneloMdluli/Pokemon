import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable({providedIn:'root'})

export class doesPokemonExist {
    
    constructor(private http:HttpClient){}

    queryPokemonByName(searchString){
      
       return this.http.get(`https://us-central1-pokemoncards-2f39c.cloudfunctions.net/pokemon/cards/${searchString.toLowerCase()}`)
       .pipe(map(res=>{
            if(res['name']==null){
                return false
            }
            return true;
       }))

    }
}

