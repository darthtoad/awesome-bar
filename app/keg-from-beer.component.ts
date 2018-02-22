import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { Beer } from './beer.model';

@Component({
  selector: 'keg-from-beer',
  template: `
    <div *ngIf="childBeer">
      <h2>New Keg from {{childBeer.name}}</h2>
      <div class="new-keg">
        <label>Total Pints: </label>
        <input type="number" #kegTotalPints>
        <label>Pints Remaining: </label>
        <input type="number" #kegPintsRemaining>
        <button (click)="submitForm(kegTotalPints.value, kegPintsRemaining.value); kegTotalPints.value=''; kegPintsRemaining.value='';">Register New Keg</button>
      </div>
    </div>
  `
})

export class KegFromBeerComponent {
  @Input() childBeer: Beer;
  @Output() newKegFromBeerSender = new EventEmitter();

  submitForm(kegTotalPints: number, kegPintsRemaining: number) {
    console.log("Total pints: " + kegTotalPints + "Pints Remaining: " + kegPintsRemaining)
    var newKegToAdd: Keg = new Keg(this.childBeer, kegTotalPints, kegPintsRemaining);
    this.newKegFromBeerSender.emit(newKegToAdd);
  }
}
