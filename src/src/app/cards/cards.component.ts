import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon.model';
import { getPokemon } from './services/getPokemon.service'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  
})
export class CardsComponent implements OnInit {

  constructor(private http: HttpClient, private GETpokemon:getPokemon) { }
  pokemonCards: Pokemon[]
  ngOnInit(): void {
    this.GETpokemon.fetchPokemon()
    .subscribe(pokemonCollection=>{
      this.pokemonCards = [...pokemonCollection];
    })
  }
  
}
