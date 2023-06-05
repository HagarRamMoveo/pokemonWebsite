import { Component } from '@angular/core';

@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent {
  filteredPokemonData: any[]; 
  selectedPokemon: string;

  constructor() {
    this.filteredPokemonData = [];
    this.selectedPokemon = '';
  }

}
