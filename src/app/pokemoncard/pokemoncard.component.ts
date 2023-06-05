import { Component, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface IPokemon {
  name: any;
  url: any;
}

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.scss']
})
export class PokemoncardComponent {
  searchInput:string = '';
  data: IPokemon[]=[];
  pokemonData: IPokemon[] = [];
  pokemonPicture:string[] = [];
  pokemonName:string[] = [];
  filteredPokemonData: IPokemon[] = [];
  modalRef: NgbModalRef | null = null;
  selectedPokemon: IPokemon | null = null;

  constructor(private http: HttpClient, public modalService: NgbModal) { }

  openModal(pokemon: IPokemon, modalContent: TemplateRef<any>) {
    this.selectedPokemon = pokemon;
    this.modalRef = this.modalService.open(modalContent, { centered: true });
  }

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.data = response.results;
        this.filteredPokemonData = this.pokemonData;  
        console.log(this.pokemonData);   
        this.bringPokemonData()
      },
      error => {
        console.error(error);
      }
    );


  }

  bringPokemonData() {
    console.log('pass4');
    this.data.map((pokemon: IPokemon) => {
      this.http.get(pokemon.url).subscribe(
        (response: any) => {
          this.pokemonPicture = response.sprites.front_default;
          this.pokemonName = response.name;
          const newObj:IPokemon = {
            name: this.pokemonName,
            url: this.pokemonPicture
          }
          this.pokemonData.push(newObj);
        },
        (error: any) => {
          console.error(error);
        }
      );
    });
  }
  


  selectPokemon(event: Event) {
    const selected = (<HTMLInputElement>event.target).value;
    if (this.pokemonData) {
      this.filteredPokemonData = this.pokemonData.filter((pokemon: IPokemon) => {
        return pokemon.name.toLowerCase().includes(selected.toLowerCase());
      });
    }
  }
  
  searchPokemon(searchText: string) {
    this.filteredPokemonData = this.pokemonData.filter((pokemon: IPokemon) => {
      return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
 
  
}
