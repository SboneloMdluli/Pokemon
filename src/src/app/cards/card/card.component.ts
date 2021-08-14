import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { clickedPokemon } from '../services/getPokemonStats.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon
  
  ngOnInit(): void {

  }

  constructor(private PokemonStats: clickedPokemon){}

  clickFunction(event, pokemon) {
    this.PokemonStats.fetchStats(pokemon)
  }

}
