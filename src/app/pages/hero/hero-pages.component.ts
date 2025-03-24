import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-pages.component.html',
})
export class HeroPagesComponent {
  name = signal('Ironman');
  age = signal(45);

  //methods
  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    return (
      this.name.update((current) => (current = 'Spiderman ')),
      this.age.update((current) => (current = 22))
    );
  }

  resetForm() {
    this.name, this.age;
  }
}
