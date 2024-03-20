import { Component, Input } from '@angular/core';
import { AnyCharacter } from '../../../model/interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  message!: string;
  @Input({ required: true }) character!: AnyCharacter;
  showMessage() {
    this.message = this.character.message;
  }
}
