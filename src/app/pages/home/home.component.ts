import { Component, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {CardService} from '../../services/card.service';
import {Card, Port, Type} from '../../interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  // Variables
  pageEvent: PageEvent;

  title = 'SpaceX Ships'; // Main title
  firstPage = 0; // Range pages start
  lastPage = 5; // Range pages end

  selectedPorts: number[] = []; // Array for selected  ports
  selectedType: number;


  storeCards: Card[] = []; // Array for store all modify cards
  modifiedCards: Card[] = []; // Array for filter manipulation

  filteredResult: Card[] = [];

  cards: Card[] = [];
  ports: Port[] = [];
  types: Type[] = [];

  index = 0;

  filterSettings = {
    text: '',
    type: null,
    ports: []
  };

  @ViewChild('paginator') paginator: MatPaginator;


  // first step - changing the original array with cards, finding and adding a new property "portName" to each card from the array "ports"
  // second step - saving the modified state of cards - it will be required after cleaning the filter
  // third step - copy to new array "modifiedCards" for filter manipulation
  constructor(private cardService: CardService) {
    this.cards = this.cardService.cards;
    this.ports = this.cardService.ports;
    this.types = this.cardService.types;

    this.storeCards = this.cardService.storeCards;
    this.modifiedCards = this.storeCards; // Copy to new array "modifiedCards" for filter manipulation
    this.filteredResult = this.modifiedCards;
  }




  // Calculation of the current state of the paginator after each paginator event
  public getPaginatorData(event) {
    this.firstPage = event.pageIndex * event.pageSize;
    this.lastPage = this.firstPage + event.pageSize;
    return event;
  }






// Если в строке поиска есть какие то данные то он не заходит во вторую конструкцию
  filter(value){
    if ((value.text && value.text.trim() !== '') && (value.type || value.type === 0) && (value.ports.length > 0)){
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){
            if (card.typeId === value.type){
              if (card.title.toLowerCase().includes(value.text.toLowerCase())){
                this.paginator.firstPage(); // Moving to first hage paginator
                return card;
              }
            }
          }
        }
      });
    }else if ((value.text && value.text.trim() !== '') && (value.type || value.type === 0)){
      return this.modifiedCards.filter(card => {
        if (card.typeId === value.type){
          if (card.title.toLowerCase().includes(value.text.toLowerCase())){
            this.paginator.firstPage(); // Moving to first hage paginator
            return card;
          }
        }
      });
    }else if ((value.ports.length > 0) && (value.type || value.type === 0)){
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){
            if (card.typeId === value.type){
              this.paginator.firstPage(); // Moving to first hage paginator
              return card;
            }
          }
        }
        this.index = this.index + 1;
      });
    }else if ((value.ports.length > 0) && (value.text && value.text.trim() !== '')){
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){
            if (card.title.toLowerCase().includes(value.text.toLowerCase())){
              this.paginator.firstPage(); // Moving to first hage paginator
              return card;
            }
          }
        }
      });
      return this.filteredResult;
    } else if (value.text && value.text.trim() !== ''){
      return this.modifiedCards.filter(card => {
        if (card.title.toLowerCase().includes(value.text.toLowerCase())){
          this.paginator.firstPage(); // Moving to first hage paginator
          return card.title.toLowerCase().includes(value.text.toLowerCase());
        }
      });
    } else if (value.ports.length > 0){
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){
            this.paginator.firstPage(); // Moving to first hage paginator
            return card;
          }
        }
        this.index = this.index + 1;
      });
    } else if (value.type || value.type === 0){
      return this.modifiedCards.filter(card => {
        if (card.typeId === value.type){
          this.paginator.firstPage(); // Moving to first hage paginator
          return card;
        }
        this.index = this.index + 1;
      });
    } else {
      return this.filteredResult = this.modifiedCards;
      return this.filteredResult;
    }
  }


  // Search text
  onSearchText(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Get text from input
    this.filterSettings.text = filterValue; // Add selected text at filterSettings
    this.filteredResult = this.filter(this.filterSettings);
  }

  onTypesSelected($event): void{
    this.filterSettings.type = Number($event); // Add selected type at filterSettings
    this.filteredResult = this.filter(this.filterSettings);
  }

  onTypesSelectedFromList(val: number): void{
    this.selectedType = val;
    this.filterSettings.type = this.selectedType; // Add selected type at filterSettings
    this.filteredResult = this.filter(this.filterSettings);
  }


  onPortsSelected(val: number[]): void {
    this.selectedPorts = val;
    this.filterSettings.ports = val; // Add selected ports at filterSettings
    this.filteredResult = this.filter(this.filterSettings);
  }

  onPortsSelectedFromList(val: number): void {
    if (!this.selectedPorts.some(e => e === val)){
      this.selectedPorts = [val];
      this.filterSettings.ports = this.selectedPorts; // Add selected ports at filterSettings
      this.filteredResult = this.filter(this.filterSettings);
    }
  }






  next(event){
    this.paginator.nextPage();
  }

  previous(event){
    this.paginator.previousPage();
  }



}
