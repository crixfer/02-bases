import { UpperCasePipe } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

@Component({
  templateUrl: './hero-pages.component.html',
  imports: [UpperCasePipe],
})
export class HeroPagesComponent {
  name = signal('Ironman');
  age = signal(45);

  //methods
  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    return (
      this.name.update((current) => (current = 'Spiderman ')),
      this.age.update((current) => (current = 22))
    );
  }

  changeAge() {
    this.age.update((current) => (current = 60));
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  // allCaps() {
  //   return computed(() => this.name().toUpperCase);
  // }

  //changing a signal to upperCase
  // get allCaps() {
  //   const capsHero = this.name().toUpperCase();
  //   return capsHero;
  // }
}
