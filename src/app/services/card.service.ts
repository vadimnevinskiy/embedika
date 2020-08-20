import {Injectable} from '@angular/core';
import {CARDS, PORTS, TYPES} from '../data/data';
import {Card, Port, Type} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CardService{
  ports: Port[] = PORTS; // All Ports response
  types: Type[] = TYPES; // All Types response
  cards: Card[] = CARDS; // All Cards response

  storeCards: Card[] = []; // Array for store all modify cards
  modifiedCards: Card[] = []; // Array for filter manipulation
  filteredResult: Card[] = [];

  constructor() {
    this.cards.forEach((card) => {
      const port = this.ports.find((val) => {
        return card.portId === val.id;
      });

      const type = this.types.find((val) => {
        return card.typeId === val.id;
      });


      // Create new object with current data
      const storeCard = {
        ...card, // Current card
        portName: port.title, // Adding a new field "portName"
        typeName: type.title // Adding a new field "typeName"
      };

      this.storeCards.push(storeCard); // Pushed object to new array "storeCards"
      this.modifiedCards = this.storeCards; // Copy to new array "modifiedCards" for filter manipulation
      this.filteredResult = this.modifiedCards;
    });
  }

  getCard(id: number){
    return this.filteredResult.find(item => item.id === id);
  }
}
