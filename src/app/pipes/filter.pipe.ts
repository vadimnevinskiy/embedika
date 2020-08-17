import { Pipe, PipeTransform } from '@angular/core';
import {Card} from '../interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cards: Card[], search): Card[] {
      if (!search.trim()){
        return cards;
      }
      return cards.filter(card => {
        return card.title.toLowerCase().includes(search.toLowerCase());
      });
  }

}
