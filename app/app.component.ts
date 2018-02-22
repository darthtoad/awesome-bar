import { Component } from '@angular/core';
import { Beer } from './beer.model';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  </div>
  `
})

export class AppComponent {
  beers: Beer[] = [new Beer("Awesome IPA", "IPA", "Awesome Brewery", 5, 6, "A classic American IPA. Hints of tangerine, strongly hopped"), new Beer("Porter Rico", "Porter", "Cerveceria Ciudad Rosa", 6, 7.2, "A strong, heavily malted porter.")];

  kegs: Keg[] = [new Keg(this.beers[0], 120, 76), new Keg(this.beers[1], 120, 55)];
}
