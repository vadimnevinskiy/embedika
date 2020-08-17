import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Card} from '../../../interfaces';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() card: Card;

  // Send event to home component
  @Output() filterTypeEvent = new EventEmitter<number>();
  @Output() filterPortEvent = new EventEmitter<number>();



  ngOnInit() {}


  selectAllByType(val) {
    this.filterTypeEvent.emit(val);
  }

  selectAllByPort(val){
    this.filterPortEvent.emit(val);
  }

}
