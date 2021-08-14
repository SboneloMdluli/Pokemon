import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable({providedIn:'root'})

export class doesPokemonExist {
    
    constructor(private http:HttpClient){}

    queryPokemonByName(name){
      
       return this.http.get(`https://pokemoncards-2f39c-default-rtdb.firebaseio.com/${name}.json`)
       .pipe(map(res=>{
            if(res==null){
                return false
            }
            return true;
       }))

    }
}

