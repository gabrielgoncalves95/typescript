var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('mega-prop');
ship.jumpIntoHyperSpace();
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon(brand) {
        var _this = _super.call(this, brand) || this;
        _this.brand = brand;
        _this.loadCapacity = 3;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('Failed!');
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
var falcon = new MilleniumFalcon('hyper-prop');
falcon.jumpIntoHyperSpace();
var canHandleJob = function (ship) { return ship.loadCapacity > 2; };
console.log("Is this ship good for the job? " + canHandleJob(falcon));
