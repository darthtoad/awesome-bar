import { Beer } from './beer.model'

export class Keg {
  constructor(public beer: Beer, public totalPints: number, public pintsRemaining: number) {    }
}
