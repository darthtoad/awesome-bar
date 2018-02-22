import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {
  transform(input: Keg[], desiredStyle){
    if (desiredStyle === "all") {
      return input;
    } else {
      var output: Keg[] = [];
      for (let i = 0; i < input.length; i++) {
        console.log(desiredStyle)
        if (input[i].beer.type === desiredStyle) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
