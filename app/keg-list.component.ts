import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList" [class]="allKeg(currentKeg)">
      <h3>{{currentKeg.beer.name}}</h3>
      <p>{{currentKeg.beer.type}}</p>
      <p>{{currentKeg.beer.brewery}}</p>
      <p [class]="highPrice(currentKeg)">\${{currentKeg.beer.price}}</p>
      <p [class]="alcohol(currentKeg)">{{currentKeg.beer.alcoholContent}} abv</p>
      <p>{{currentKeg.beer.description}}</p>
      <p>Total Pints: {{currentKeg.totalPints}}</p>
      <p>
        <label>Pints Remaining: </label>
        <input type="number" [(ngModel)]="currentKeg.pintsRemaining">
      </p>
      <button (click)="editKegHasBeenClicked(currentKeg)">Edit Keg</button>
      <button (click)="createNewKegFromBeer(currentKeg)">Create New Keg From Beer</button>
      <hr>
    </li>
  </ul>
  `
})

export class KegListComponent {

  @Input() childKegList: Keg[];

  @Output() editKegSender = new EventEmitter();
  @Output() createNewKegFromBeerSender = new EventEmitter();

  createNewKegFromBeer(kegFromBeer: Keg) {
    this.createNewKegFromBeerSender.emit(kegFromBeer.beer);
  }

  editKegHasBeenClicked(kegToShow: Keg) {
    this.editKegSender.emit(kegToShow);
  }

  allKeg(keg) {
    if (keg.pintsRemaining <= 10) {
      return `low ${keg.beer.type}`;
    } else {
      return `${keg.beer.type}`
    }
  }

  highPrice(keg) {
    if (keg.beer.price > 7) {
      return "expensive";
    }
  }

  alcohol(keg) {
    if (keg.beer.alcoholContent > 8) {
      return "strong";
    }
  }

}
