class Spacecraft{
  constructor (private propulsor: string){}

  jumpIntoHyperSpace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

interface Containership{
  loadCapacity: number
}

export{Spacecraft, Containership}
