import { Component } from '@angular/core';
import { Beer } from './beer.model';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <keg-list [childKegList]="kegs" [childBeerList]="beers" (editKegSender)="editKeg($event)" (createNewKegFromBeerSender)="addKegFromBeer($event)"></keg-list>
    <keg-new (newBeerSender)="addBeer($event)" (newKegSender)="addKeg($event)"></keg-new>
    <keg-from-beer [childBeer]="currentBeer" (newKegFromBeerSender)="addKeg($event)"></keg-from-beer>
    <keg-edit [childEditKeg]="currentKeg" (finishedEditSender)="finishEditKeg()"></keg-edit>
  </div>
  `
})

export class AppComponent {
  beers: Beer[] = [new Beer("Awesome IPA", "IPA", "Awesome Brewery", 5, 6, "A classic American IPA. Hints of tangerine, strongly hopped"), new Beer("Porter Rico", "Porter", "Cerveceria Ciudad Rosa", 6, 7.2, "A strong, heavily malted porter.")];

  kegs: Keg[] = [new Keg(this.beers[0], 120, 76), new Keg(this.beers[1], 120, 55)];

  currentKeg = null;

  currentBeer = null;

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }

  addKegFromBeer(beer: Beer) {
    this.currentBeer = beer;
  }

  addBeer(newBeer: Beer) {
    this.beers.push(newBeer);
  }

  editKeg(currentKeg) {
    this.currentKeg = currentKeg;
  }

  finishEditKeg() {
    this.currentKeg = null;
  }
}
