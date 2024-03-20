import { Component } from '@angular/core';
import { AnyCharacter } from '../../../model/interface';
import { character } from '../../../core/data';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  character: AnyCharacter[] = [];
  constructor() {
    this.onLoad();
  }
  onLoad() {
    character().then((characters) => {
      this.character = characters;
    });
  }
}
