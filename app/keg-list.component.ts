import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegList">
      <h3>{{currentKeg.beer.name}}</h3>
      <p>{{currentKeg.beer.type}}</p>
      <p>{{currentKeg.beer.brewery}}</p>
      <p>\${{currentKeg.beer.price}}</p>
      <p>{{currentKeg.beer.alcoholContent}} abv</p>
      <p>{{currentKeg.beer.description}}</p>
      <button (click)="editKegHasBeenClicked(currentKeg)">Edit Keg</button>
      <hr>
    </li>
  </ul>
  `
})

export class KegListComponent {

  @Input() childKegList: Keg[];

  @Output() editKegSender = new EventEmitter();

  editKegHasBeenClicked(kegToShow: Keg) {
    this.editKegSender.emit(kegToShow);
  }

}
