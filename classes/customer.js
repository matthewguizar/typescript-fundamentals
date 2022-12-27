var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.first = theFirst;
        this.last = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this.first;
        },
        set: function (value) {
            this.first = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "LastName", {
        get: function () {
            return this.last;
        },
        set: function (theLast) {
            this.last = theLast;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Matthew", "Guizar");
myCustomer.firstName = "Matte";
console.log(myCustomer);
