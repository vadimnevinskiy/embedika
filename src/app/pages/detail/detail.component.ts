import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CardService} from '../../services/card.service';
import {Card} from '../../interfaces';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  card: Card;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params', params);
      this.card = this.cardService.getCard(Number(params.id));
      this.card;
    });
  }

}
