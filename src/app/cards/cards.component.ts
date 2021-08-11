import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  pokemonCards: Pokemon[] = [
    new Pokemon('Pokemon', 'stats', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'ta', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'stats', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'ta', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'stats', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'ta', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'stats', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'ta', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'stats', "https://material.angular.io/assets/img/examples/shiba2.jpg"),
    new Pokemon('Pokemon', 'ta', "https://material.angular.io/assets/img/examples/shiba2.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
