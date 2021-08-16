import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {doesPokemonExist} from './services/searchPokemonInDb.service'

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute, private isPokemonValid:doesPokemonExist) { }
      searchPokemon(form: NgForm){
        const name = form.value.name
        
        this.isPokemonValid.queryPokemonByName(name).subscribe(isValid=>{
            if(isValid){
              this._router.navigate([`cards/${name}`],{relativeTo:this._activatedRoute})
            }else{
              this._router.navigate([`pokemonNotFound`],{relativeTo:this._activatedRoute})
            }
        })
    

      }
  ngOnInit(): void {
  }

}
