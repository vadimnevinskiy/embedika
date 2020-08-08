import {Component, ViewChild} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';

// Interface for Card items
export interface Card {
  id: number;
  title: string;
  typeId: number;
  typeName?: string;
  portId: number;
  portName?: string;
}

// Interface for Port items
export interface Port {
  id: number;
  title: string;
  // checked?: boolean;
}

// Interface for Type items
export interface Type {
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
  // Variables
  pageEvent: PageEvent;

  title = 'SpaceX Ships'; // Main title
  firstPage = 0; // Range pages start
  lastPage = 5; // Range pages end
  search = ''; // Search field

  selectedPorts: string[]; // Array for selected  ports
  selectedType: number;

  storeCards: Card[] = []; // Array for store all modify cards
  filteredCards: Card[] = []; // Array for filter manipulation

  filteredResult: Card[] = [];

  // All Ports response
  ports: Port[] = [
    {id: 0, title: 'Port Canavera'},
    {id: 1, title: 'Port of Los Angeles'},
    {id: 2, title: 'Fort Lauderdale'}
  ];

  // All Ports response
  types: Type[] = [
    {id: 0, title: 'Barge'},
    {id: 1, title: 'Cargo'},
    {id: 2, title: 'High Speed Craft'},
    {id: 3, title: 'Tug'}
  ];

  // All Cards response - without port title
  cards: Card[] = [
    {id: 0, title: 'GO Ms Chief', typeId: 2, portId: 0},
    {id: 1, title: 'A Shortfall of Gravitas', typeId: 0, portId: 1},
    {id: 2, title: 'American Islander', typeId: 1, portId: 2},
    {id: 3, title: 'Port of Los Angeles', typeId: 3, portId: 1},
    {id: 4, title: 'Of Course I Still Love You', typeId: 0, portId: 2},
    {id: 5, title: 'A Shortfall of Gravitas', typeId: 0, portId: 0},
    {id: 6, title: 'Of Course I Still Love You', typeId: 3, portId: 0},
    {id: 7, title: 'American Islander', typeId: 1, portId: 1},
    {id: 8, title: 'Port of Los Angeles', typeId: 3, portId: 2},
    {id: 9, title: 'Of Course I Still Love You', typeId: 0, portId: 0},
    {id: 10, title: 'Of Course I Still Love You', typeId: 3, portId: 0}
  ];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Constructor
  // first step - changing the original array with cards, finding and adding a new property "portName" to each card from the array "ports"
  // second step - saving the modified state of cards - it will be required after cleaning the filter
  // third step - copy to new array "filteredCards" for filter manipulation
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
      this.filteredCards = this.storeCards; // Copy to new array "filteredCards" for filter manipulation
    });
  }



  // Calculation of the current state of the paginator after each paginator event
  public getPaginatorData(event) {
    this.firstPage = event.pageIndex * event.pageSize;
    this.lastPage = this.firstPage + event.pageSize;
    return event;
  }





  // Filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Filter field value
    if (!filterValue.trim()){
      // If clearing field - return it in storeCards
      this.filteredCards = this.storeCards;
      return this.filteredCards;
    } else {
      // If the field contains data, filter by "filterValue"
      this.filteredCards = []; // Clear array "filteredCards"
      this.storeCards.filter(card => {
        if (card.title.toLowerCase().includes(filterValue.toLowerCase())){
          this.filteredCards.push(card); // Pushed to cleaned array "filteredCards" each object containing data from the field
          this.paginator.firstPage(); // Moving to first hage paginator
        }
      });
    }
  }


  onPortsSelected(selectedPorts: string[]): void {
    console.log(selectedPorts);
  }



  onTypesSelected($event): void{
    console.log($event);
    this.applyFilterByType(Number($event));
  }
  applyFilterByType(val: number): void {
      // If the field contains data, filter by "filterValue"
      this.filteredCards = []; // Clear array "filteredCards"
      this.storeCards.filter(card => {
        if (card.typeId === val){
          this.filteredCards.push(card); // Pushed to cleaned array "filteredCards" each object containing data from the field
          this.paginator.firstPage(); // Moving to first hage paginator
        }
      });
  }



  nextPage(event){
    this.paginator.nextPage();
  }

  previousPage(event){
    this.paginator.previousPage();
  }


}

