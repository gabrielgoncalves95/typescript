import {Spacecraft, Containership} from './base-ships'

export class MilleniumFalcon extends Spacecraft implements Containership{
  constructor(private brand: string){
    super(brand)
    this.loadCapacity = 3
  }
  loadCapacity: number
  jumpIntoHyperSpace(){
    if (Math.random()>= 0.5){
      super.jumpIntoHyperSpace()
    } else {
      console.log('Failed!')
    }
  }
}
