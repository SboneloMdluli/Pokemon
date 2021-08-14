import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon.model';
import { clickedPokemon } from '../services/getPokemonStats.service'


@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
   pokemon: Pokemon

   constructor(private route:ActivatedRoute, private PokemonStats: clickedPokemon){
    this.PokemonStats.fetchStats({
      name: this.route.snapshot.params['name'],
      index:"",
      image:""
    })

   }
   
  ngOnInit(): void {

    this.PokemonStats.getPokemon().subscribe(pokemonmetaData=>{
      console.log(pokemonmetaData)
   })

    this.route.params
    .subscribe((params)=>{
      
   
      this.pokemon = {
        index : "1",
        name : this.route.snapshot.params['name'],
        image : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
      }
     }
    )
  }



  // when image clicked run funtion that takes sprite name and return stats with index

}
