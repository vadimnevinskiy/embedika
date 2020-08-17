import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {CardService} from '../../services/card.service';
import {Card, Port, Type} from '../../interfaces';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  // Variables
  pageEvent: PageEvent;

  title = 'SpaceX Ships'; // Main title
  firstPage = 0; // Range pages start
  lastPage = 5; // Range pages end

  selectedPorts: number[] = []; // Array for selected  ports
  selectedType: number; // Id for selected  type


  storeCards: Card[] = []; // Array for store all modify cards
  modifiedCards: Card[] = []; // Array for filter manipulation

  filteredResult: Card[] = []; // Filtered cards

  cards: Card[] = []; // Cards
  ports: Port[] = []; // Ports
  types: Type[] = []; // Types


  filterSettings = {
    text: '',
    type: null,
    ports: []
  };

  @ViewChild('paginator') paginator: MatPaginator;


  // first step - changing the original array with cards, finding and adding a new property "portName" to each card from the array "ports"
  // second step - saving the modified state of cards - it will be required after cleaning the filter
  // third step - copy to new array "modifiedCards" for filter manipulation
  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) {
    this.cards = this.cardService.cards; // Get all cards from service
    this.ports = this.cardService.ports; // Get all ports from service
    this.types = this.cardService.types; // Get all types from service

    this.storeCards = this.cardService.storeCards;  // Get all "storeCards" from service
    this.modifiedCards = this.storeCards; // Copy to new array "modifiedCards" for filter manipulation
    this.filteredResult = this.modifiedCards; // Copy to new array "filteredResult" for filter manipulation
  }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      console.log('Params', params);
      if(params.text || params.type || params.ports){
        this.filterSettings = {
          text: params.text,
          type: params.type,
          ports: params.ports,
        };
        this.filteredResult = this.filter(this.filterSettings);
      }
    });
  }

  // Calculation of the current state of the paginator after each paginator event
  public getPaginatorData(event) {
    this.firstPage = event.pageIndex * event.pageSize;
    this.lastPage = this.firstPage + event.pageSize;
    return event;
  }






// Filter array
  filter(value){
    // If search Card title and Card type and Card port
    if ((value.text && value.text.trim() !== '') && (value.type || value.type === 0) && (value.ports.length > 0)){
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){ // Search items by Port
            if (card.typeId === value.type){ // Search items by Type
              if (card.title.toLowerCase().includes(value.text.toLowerCase())){ // Search items by Text
                this.paginator.firstPage(); // Moving to first hage paginator
                return card;
              }
            }
          }
        }
      });
    }else if ((value.text && value.text.trim() !== '') && (value.type || value.type === 0)){ // If search Card title and Card type
      return this.modifiedCards.filter(card => {
        if (card.typeId === value.type){ // Search items by Type
          if (card.title.toLowerCase().includes(value.text.toLowerCase())){ // Search items by Text
            this.paginator.firstPage(); // Moving to first hage paginator
            return card;
          }
        }
      });
    }else if ((value.ports.length > 0) && (value.type || value.type === 0)){ // If search Card ports and Card type
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){ // Search items by Port
            if (card.typeId === value.type){ // Search items by Type
              this.paginator.firstPage(); // Moving to first hage paginator
              return card;
            }
          }
        }
      });
    }else if ((value.ports.length > 0) && (value.text && value.text.trim() !== '')){ // If search Card ports and Text
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) { // Search items by Port
          if (card.portId === port){
            if (card.title.toLowerCase().includes(value.text.toLowerCase())){ // Search items by Text
              this.paginator.firstPage(); // Moving to first hage paginator
              return card;
            }
          }
        }
      });
      return this.filteredResult;
    } else if (value.text && value.text.trim() !== ''){ // If search by Text
      return this.modifiedCards.filter(card => {
        if (card.title.toLowerCase().includes(value.text.toLowerCase())){
          this.paginator.firstPage(); // Moving to first hage paginator
          return card.title.toLowerCase().includes(value.text.toLowerCase());
        }
      });
    } else if (value.ports.length > 0){ // If search by Ports
      return this.modifiedCards.filter(card => {
        for (const port of value.ports) {
          if (card.portId === port){
            this.paginator.firstPage(); // Moving to first hage paginator
            return card;
          }
        }
      });
    } else if (value.type || value.type === 0){ // If search by Type
      return this.modifiedCards.filter(card => {
        if (card.typeId === value.type){
          this.paginator.firstPage(); // Moving to first hage paginator
          return card;
        }
      });
    } else { // If reset filters
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






  next(){
    this.paginator.nextPage();
  }

  previous(){
    this.paginator.previousPage();
  }



}
