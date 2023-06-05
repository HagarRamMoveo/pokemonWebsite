import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from '../pokemoncard/pokemoncard.component';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  // Pokemon:string = ''
  // pokemonData: IPokemon[] = [];
  // selectedPokemon: IPokemon | null = null;
  // constructor(private http: HttpClient){
   
  // }
  // searchPokemon(searchText: string) {
  //   this.pokemonData = this.pokemonData.filter((pokemon: IPokemon) => {
  //     return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
  //   });
  // }
  // ngOnInit() {
  //   this.fetchPokemons();
  // }
    
  //   fetchPokemons() {
  //     const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
  //     this.http.get(apiUrl).subscribe(
  //       (response: any) => {
  //         console.log(response);
  //         this.pokemonData = response.results;
  //         console.log(this.pokemonData);
  //       },
  //       error => {
  //         console.error(error);
  //       }
  //     );
  //   }
}
