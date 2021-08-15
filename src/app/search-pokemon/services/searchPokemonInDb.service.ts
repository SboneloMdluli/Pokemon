import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'

@Injectable({providedIn:'root'})

export class doesPokemonExist {
    
    constructor(private http:HttpClient){}

    queryPokemonByName(name){
      
       return this.http.get(`https://localhost:3000/cards/${name}`)
       .pipe(map(res=>{
            if(res==null){
                return false
            }
            return true;
       }))

    }
}

