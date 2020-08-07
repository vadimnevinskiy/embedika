import {Component} from '@angular/core';
import {interval} from 'rxjs';
import {element} from 'protractor';

export interface Card {
  id: number;
  title: string;
  type: string;
  portId: number;
  portName?: string;
}
export interface Port {
  id: number;
  title: string;
  // checked?: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'SpaceX Ships';
  lowValue = 0;
  highValue = 5;
  search = '';
  portCompleted = 0;

  selectedPorts: string[];

  ports: Port[] = [
    {id: 0, title: 'Port Canavera'},
    {id: 1, title: 'Port of Los Angeles'},
    {id: 2, title: 'Fort Lauderdale'}
  ];

  cards: Card[] = [
    {id: 0, title: 'GO Ms Chief', type: 'High Speed Craft', portId: 0},
    {id: 1, title: 'A Shortfall of Gravitas', type: 'Barge', portId: 1},
    {id: 2, title: 'American Islander', type: 'Cargo', portId: 2},
    {id: 3, title: 'Port of Los Angeles', type: 'Tug', portId: 1},
    {id: 4, title: 'Of Course I Still Love You', type: 'Barge', portId: 2},
    {id: 5, title: 'A Shortfall of Gravitas', type: 'Barge', portId: 0},
    {id: 6, title: 'Of Course I Still Love You', type: 'Tug', portId: 0},
    {id: 7, title: 'American Islander', type: 'Cargo', portId: 1},
    {id: 8, title: 'Port of Los Angeles', type: 'Tug', portId: 2},
    {id: 9, title: 'Of Course I Still Love You', type: 'Barge', portId: 0},
    {id: 10, title: 'Of Course I Still Love You', type: 'Tug', portId: 0}
  ];

  modifyCards: Card[] = [];
  constructor() {
    this.cards.forEach((card) => {
      const find = this.ports.find((port) => {
        return card.portId === port.id;
      });

      const modifyCard = {
        ...card,
        portName: find.title
      };
      this.modifyCards.push(modifyCard);
    });


  }
  config: any = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.cards.length
  };
  panelOpenState = false;

  pageChanged(event){
    this.config.currentPage = event;
  }
  public getPaginatorData(event) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }


  onGroupsChange(selectedPorts: string[]) {
    console.log(selectedPorts);
  }

}

