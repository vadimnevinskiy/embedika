import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Card} from '../../../app.component';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  constructor() { }


  @Output() filterTypeEvent = new EventEmitter<number>();
  @Output() filterPortEvent = new EventEmitter<number>();

  ngOnInit() {}


  filterType(val) {
    this.filterTypeEvent.emit(val);
    console.log(val);
  }

  filterPort(val){
    this.filterPortEvent.emit(val);
  }

}
