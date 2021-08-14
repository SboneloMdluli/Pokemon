import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pokemonMetaData } from '../pokemon.meta.model';
import { clickedPokemon } from '../services/getPokemonStats.service'


@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
   pokemonInfo: pokemonMetaData
   

   constructor(private route:ActivatedRoute, private PokemonStats: clickedPokemon){
    this.PokemonStats.fetchStats({
      name: this.route.snapshot.params['name'],
      index:"",
      image:""
    })
    
   }
   
  ngOnInit(): void {


    this.route.params
    .subscribe((params)=>{
      
      this.PokemonStats.getPokemon().subscribe(pokemonmetaData=>{
        this.pokemonInfo ={... pokemonmetaData}
     })
   
     }
    )
  }



  // when image clicked run funtion that takes sprite name and return stats with index

}
