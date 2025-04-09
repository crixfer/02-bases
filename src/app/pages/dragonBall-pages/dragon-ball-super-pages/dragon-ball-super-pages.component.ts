import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'app-dragon-ball-super-pages',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragon-ball-super-pages.component.html',
})

// injecting service
export class DragonBallSuperPagesComponent {
  public dragonballService = inject(DragonballService);
}
