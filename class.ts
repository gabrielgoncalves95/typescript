class Spacecraft{
  constructor (private propulsor: string){}

  jumpIntoHyperSpace(){
    console.log(`Entering hyperspace with ${this.propulsor}`)
  }
}

let ship = new Spacecraft('mega-prop')
ship.jumpIntoHyperSpace()

class MilleniumFalcon extends Spacecraft implements Containership{
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

let falcon = new MilleniumFalcon('hyper-prop')
falcon.jumpIntoHyperSpace()

interface Containership{
  loadCapacity: number
}

let canHandleJob = (ship: Containership) => ship.loadCapacity > 2
console.log(`Is this ship good for the job? ${canHandleJob(falcon)}`)
