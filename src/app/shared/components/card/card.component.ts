import {Component, Input, OnInit} from '@angular/core';
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




  ngOnInit() {}

}
