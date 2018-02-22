import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { Beer } from './beer.model';

@Component({
  selector: 'keg-new',
  template: `
    <h2>New Keg</h2>
    <div class="new-keg">
      <label>Beer name: </label>
      <input #beerName>
      <label>Beer type: </label>
      <input #beerType>
      <label>Brewery: </label>
      <input #beerBrewery>
      <label>Price: </label>
      <input type="number" #beerPrice>
      <label>Alcohol Content: </label>
      <input type="number" #beerAlcoholContent>
      <label>Description: </label>
      <input #beerDescription>
      <label>Total Pints: </label>
      <input #kegTotalPints>
      <label>Pints Remaining: </label>
      <input #kegPintsRemaining>
      <button (click)="submitForm(beerName.value, beerType.value, beerBrewery.value, beerPrice.value, beerAlcoholContent.value, beerDescription.value, kegTotalPints.value, kegPintsRemaining.value); beerName.value=''; beerType.value=''; beerBrewery.value=''; beerPrice.value=''; beerAlcoholContent.value=''; beerDescription.value=''; kegTotalPints.value=''; kegPintsRemaining.value='';">Register New Keg</button>
    </div>
  `
})

export class KegNewComponent {
  @Output() newBeerSender = new EventEmitter();
  @Output() newKegSender = new EventEmitter();

  submitForm(beerName: string, beerType: string, beerBrewery: string, beerPrice: number, beerAlcoholContent: number, beerDescription: string, kegTotalPints: number, kegPintsRemaining: number) {
    var newBeerToAdd: Beer = new Beer(beerName, beerType, beerBrewery, beerPrice, beerAlcoholContent, beerDescription);
    var newKegToAdd: Keg = new Keg(newBeerToAdd, kegTotalPints, kegPintsRemaining);
    this.newKegSender.emit(newKegToAdd);
  }
}
