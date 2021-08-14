import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  constructor() { }
  searchPokemon(form: NgForm){
    const value = form.value
    console.log(value.name)
  }
  ngOnInit(): void {
  }

}
