import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  templateUrl: './counter-pages.component.html',
  imports: [RouterOutlet],
})
export class CounterPagesComponent {
  counter_signal = signal(0);

  modifier(value: number) {
    this.counter_signal.update((current) => (current += value));
  }

  reset() {
    this.counter_signal.update((current) => (current = 0));
  }
}
