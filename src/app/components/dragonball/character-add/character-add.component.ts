import { Component, signal } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add.component',
  templateUrl: './character-add.component.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  addFighter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const addCharacter: Character = {
      // id: this.characters().length + 1,
      id: 4,
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, addCharacter]);
    console.log(addCharacter);
    this.eraseAll();
  }

  eraseAll() {
    this.name.set('');
    this.power.set(0);
  }
}
