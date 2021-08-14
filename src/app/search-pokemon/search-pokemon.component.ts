import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  constructor(private _router: Router, private _activatedRoute:ActivatedRoute) { }
  searchPokemon(form: NgForm){
    const name = form.value.name
    this._router.navigate([`cards/${name}`],{relativeTo:this._activatedRoute})
  }
  ngOnInit(): void {
  }

}
