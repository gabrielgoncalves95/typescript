let message: string = "Help me!";
console.log(message);
let episode: number = 4;
console.log(episode+1);

let isEnoughToBeatMF = function (parsecs: number): boolean{
  return parsecs < 12
}
let distance: number = 14
console.log(`Is ${distance} parsecs enough to beat? ${isEnoughToBeatMF(distance)}`)

let call = (name: string) => console.log(`Do you copy, ${name}`)
call("Gabs?")

function increment(speed: number, inc: number = 1): number {
  return speed+inc
}

console.log(`inc (5, 1) = ${increment(5, 1)}`)
console.log(`inc (5) = ${increment(5)}`)
