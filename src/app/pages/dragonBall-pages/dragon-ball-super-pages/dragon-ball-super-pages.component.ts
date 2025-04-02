import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../../components/dragonball/character-list/character-list.component';
import { Character } from '../../../interfaces/character.interface';
import { CharacterAddComponent } from '../../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'app-dragon-ball-super-pages',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragon-ball-super-pages.component.html',
})
export class DragonBallSuperPagesComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9001 }]);

  addFighter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const addCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, addCharacter]);

    this.eraseAll();
  }

  eraseAll() {
    this.name.set('');
    this.power.set(0);
  }
}
