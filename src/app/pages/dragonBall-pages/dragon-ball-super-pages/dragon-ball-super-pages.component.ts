import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragon-ball-super-pages',
  imports: [],
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
      id: this.characters.length + 1,
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

// name = signal('');
//   power = signal(0);

//   characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9001 }]);

//   addFighter() {
//     if (!this.name() || !this.power() || this.power() <= 0) {
//       return;
//     }

//     const newCharacter: Character = {
//       id: this.characters.length + 1,
//       name: this.name(),
//       power: this.power(),
//     };

//     //update characters
//     this.characters.update((list) => [...list, newCharacter]);

//     this.resetAll();
//   }

//   resetAll() {
//     this.name.set('');
//     this.power.set(0);
//   }

// addCharacter() {
//   if (!this.name() || !this.power() || this.power() <= 0) {
//     return;
//   }

//   const newCharacter: Character = {
//     id: this.characters().length + 1,
//     name: this.name(),
//     power: this.power(),
//   };

//   this.characters.update((list) => [...list, newCharacter]);

//   this.resetFields();
// }

// resetFields() {
//   this.name.set('');
//   this.power.set(0);}
