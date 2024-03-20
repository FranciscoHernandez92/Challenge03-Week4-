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
  static character: (
    | {
        isAlive: boolean;
        message: string;
        name: string;
        family: string;
        age: number;
        kingdomYears: number;
        type: string;
        weapon?: undefined;
        skillsRange?: undefined;
        lord?: undefined;
        serverRange?: undefined;
        master?: undefined;
      }
    | {
        isAlive: boolean;
        message: string;
        name: string;
        family: string;
        age: number;
        weapon: string;
        skillsRange: number;
        type: string;
        kingdomYears?: undefined;
        lord?: undefined;
        serverRange?: undefined;
        master?: undefined;
      }
    | {
        isAlive: boolean;
        message: string;
        name: string;
        family: string;
        age: number;
        lord: {
          isAlive: boolean;
          message: string;
          name: string;
          family: string;
          age: number;
          weapon: string;
          skillsRange: number;
        };
        type: string;
        kingdomYears?: undefined;
        weapon?: undefined;
        skillsRange?: undefined;
        serverRange?: undefined;
        master?: undefined;
      }
    | {
        isAlive: boolean;
        message: string;
        name: string;
        family: string;
        age: number;
        serverRange: number;
        master: {
          isAlive: boolean;
          message: string;
          name: string;
          family: string;
          age: number;
          weapon: string;
          skillsRange: number;
        };
        type: string;
        kingdomYears?: undefined;
        weapon?: undefined;
        skillsRange?: undefined;
        lord?: undefined;
      }
  )[];
  onLoad() {
    character().then((character) => {
      ListComponent.character = character;
    });
  }
}
