import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './beer.model';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
    <div *ngIf="childEditKeg">
      <h3>Press enter to change values. Press button to finish editing</h3>
      <label>Name:</label>
      <input [(ngModel)]="childEditKeg.beer.name">
      <label>Type:</label>
      <input [(ngModel)]="childEditKeg.beer.type">
      <label>Brewery:</label>
      <input [(ngModel)]="childEditKeg.beer.brewery">
      <label>Price: </label>
      <input type="number" [(ngModel)]="childEditKeg.beer.price">
      <label>Alcohol Content: </label>
      <input type="number" [(ngModel)]="childEditKeg.beer.alcoholContent">
      <label>Description: </label>
      <input [(ngModel)]="childEditKeg.beer.description">
      <label>Total Pints: </label>
      <input [(ngModel)]="childEditKeg.totalPints">
      <label>Pints Remaining: </label>
      <input [(ngModel)]="childEditKeg.pintsRemaining">
      <button (click)="finishEditingHasBeenClicked()">Finish editing</button>
    </div>
  `
})

export class KegEditComponent {
  @Input() childEditKeg: Keg;

  @Output() finishedEditSender = new EventEmitter();

  finishEditingHasBeenClicked() {
    this.finishedEditSender.emit();
  }
}
