var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat? " + isEnoughToBeatMF(distance));
var call = function (name) { return console.log("Do you copy, " + name); };
call("Gabs?");
function increment(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + increment(5, 1));
console.log("inc (5) = " + increment(5));
