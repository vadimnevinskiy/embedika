import {Component, ViewChild, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {isString} from 'util';

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


export class AppComponent  implements OnInit {
  // Variables
  pageEvent: PageEvent;

  title = 'SpaceX Ships'; // Main title
  firstPage = 0; // Range pages start
  lastPage = 5; // Range pages end
  search = ''; // Search field

  selectedPorts: Port[] = []; // Array for selected  ports
  selectedPorts2: number[] = []; // Array for selected  ports
  selectedPort: Port;
  selectedType: number;

  storeCards: Card[] = []; // Array for store all modify cards
  modifiedCards: Card[] = []; // Array for filter manipulation

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
  index = 0;

  filterSettings = {
    text: '',
    type: null,
    ports: []
  };


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  // Constructor
  // first step - changing the original array with cards, finding and adding a new property "portName" to each card from the array "ports"
  // second step - saving the modified state of cards - it will be required after cleaning the filter
  // third step - copy to new array "modifiedCards" for filter manipulation
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




  variable: string;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  data: any[];

  ngOnInit()
  {
    this.selectedPorts2 = [ 0, 2 ];

    this.variable = 'Loafers,Sneakers';
    this.data = this.selectedPorts2;



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
          if (card.portId === port.id){
            if (card.typeId === value.type){
              if (card.title.toLowerCase().includes(value.text.toLowerCase())){
                // return card.title.toLowerCase().includes(value.text.toLowerCase());
                return card;
                this.paginator.firstPage(); // Moving to first hage paginator
              }
            }
          }
        }
      });
    }else if ((value.text && value.text.trim() !== '') && (value.type || value.type === 0)){
      return this.modifiedCards.filter(card => {
        if (card.typeId === value.type){
          if (card.title.toLowerCase().includes(value.text.toLowerCase())){
            // return card.title.toLowerCase().includes(value.text.toLowerCase());
            return card;
            this.paginator.firstPage(); // Moving to first hage paginator
          }
        }

      });
    }else if ((value.ports.length > 0) && (value.type || value.type === 0)){
        return this.modifiedCards.filter(card => {
          for (const port of value.ports) {
            if (card.portId === port.id){
              if (card.typeId === value.type){
                // return card.title.toLowerCase().includes(value.text.toLowerCase());
                return card;
                this.paginator.firstPage(); // Moving to first hage paginator
              }
            }
          }
          this.index = this.index + 1;
        });
    }else if ((value.ports.length > 0) && (value.text && value.text.trim() !== '')){
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port.id){
            if (card.title.toLowerCase().includes(value.text.toLowerCase())){
              // return card.title.toLowerCase().includes(value.text.toLowerCase());
              return card;
              this.paginator.firstPage(); // Moving to first hage paginator
            }
          }
        }
      });
      return this.filteredResult;
    } else if (value.text && value.text.trim() !== ''){
      return this.modifiedCards.filter(card => {
        if (card.title.toLowerCase().includes(value.text.toLowerCase())){
          return card.title.toLowerCase().includes(value.text.toLowerCase());
          this.paginator.firstPage(); // Moving to first hage paginator
        }
      });
    } else if (value.ports.length > 0){
      // this.modifiedCards = []; // Clear array "modifiedCards"
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port.id){
            return card;
            this.paginator.firstPage(); // Moving to first hage paginator
          }
        }
        this.index = this.index + 1;
      });
    } else if (value.type || value.type === 0){
      return this.modifiedCards.filter(card => {
        if (card.typeId === value.type){
          return card;
          this.paginator.firstPage(); // Moving to first hage paginator
        }
        this.index = this.index + 1;
      });
    } else {
      return this.filteredResult = this.modifiedCards;
      return this.filteredResult;
    }
  }


  // Filter
  onSearchText(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Filter field value
    this.filterSettings.text = filterValue;
    this.filteredResult = this.filter(this.filterSettings);
  }

  onTypesSelected($event): void{
    this.filterSettings.type = Number($event);
    this.filteredResult = this.filter(this.filterSettings);
  }



  onPortsSelected(selectedPorts: string[]): void {
    console.log('From app ' + selectedPorts);
    this.filterSettings.ports = selectedPorts;
    this.filteredResult = this.filter(this.filterSettings);
  }

  onPortsSelectedToArr(val: Card): void {
    this.selectedPort = {
      id: val.portId,
      title: val.portName
    };
    this.selectedPorts.push(this.selectedPort);
    this.filterSettings.ports = this.selectedPorts;
    this.filteredResult = this.filter(this.filterSettings);
  }






  nextPage(event){
    this.paginator.nextPage();
  }

  previousPage(event){
    this.paginator.previousPage();
  }


}

