import { Component, Input } from '@angular/core';
import { AnyCharacter } from '../../../model/interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: true }) item!: AnyCharacter;
}
