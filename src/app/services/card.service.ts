import {Injectable} from '@angular/core';
import {Card, Port, Type} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CardService{
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
    {id: 0, title: 'GO Ms Chief', typeId: 2, portId: 0, weight: 440892, year: 2015, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 1, title: 'A Shortfall of Gravitas', typeId: 0, portId: 1, weight: 340892, year: 2016, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 2, title: 'American Islander', typeId: 1, portId: 2, weight: 240892, year: 2017, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 3, title: 'Port of Los Angeles', typeId: 3, portId: 1, weight: 140892, year: 2018, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 4, title: 'Of Course I Still Love You', typeId: 0, portId: 2, weight: 540892, year: 2019, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 5, title: 'A Shortfall of Gravitas', typeId: 0, portId: 0, weight: 640892, year: 2020, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 6, title: 'Of Course I Still Love You', typeId: 3, portId: 0, weight: 740892, year: 2013, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 7, title: 'American Islander', typeId: 1, portId: 1, weight: 840892, year: 2014, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 8, title: 'Port of Los Angeles', typeId: 3, portId: 2, weight: 940892, year: 2012, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 9, title: 'Of Course I Still Love You', typeId: 0, portId: 0, weight: 190892, year: 2011, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']},
    {id: 10, title: 'Of Course I Still Love You', typeId: 3, portId: 0, weight: 180892, year: 2010, mission: ['SES-9', 'CRS-8', 'Thaicom 8', 'ABS-2A / Eutelsat 117W B', 'JCSAT-16', 'SES-10', 'BulgariaSat-1', 'SES-11 / Echostar 105', 'KoreaSat 5A', 'Falcon Heavy Test Flight', 'TESS', 'Bangabandhu-1', 'Telstar 19V', 'Merah Putih', 'Telstar 18V', 'Es’hail 2', 'Nusantara Satu (PSN-6) / S5 / Beresheet', 'CCtCap Demo Mission 1', 'ArabSat 6A', 'CRS-17', 'Starlink v0.9', 'STP-2', 'Starlink 1', 'JCSat 18 / Kacific 1', 'Starlink 2', 'Starlink 3', 'Starlink 4', 'Starlink 5']}
  ];


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
