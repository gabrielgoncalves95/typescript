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
