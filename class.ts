import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighter'

let ship = new Spacecraft('mega-prop');
ship.jumpIntoHyperSpace();

let falcon = new MilleniumFalcon('hyper-prop');
falcon.jumpIntoHyperSpace();

let canHandleJob = (ship: Containership) => ship.loadCapacity > 2
console.log(`Is this ship good for the job? ${canHandleJob(falcon)}`);
