import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

//loads the information from the local storage
const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem(`characters`);
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  //add character to local storage
  saveToLocalStorage = effect(() => {
    localStorage.setItem(`characters`, JSON.stringify(this.characters()));
  });

  //updates the new characters
  addFighter(person: Character) {
    this.characters.update((list) => [...list, person]);
  }
}
