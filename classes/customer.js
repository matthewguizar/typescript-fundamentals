"use strict";
class Customer {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get firstName() {
        return this.first;
    }
    set firstName(value) {
        this.first = value;
    }
    get LastName() {
        return this.last;
    }
    set LastName(theLast) {
        this.last = theLast;
    }
}
let myCustomer = new Customer("Matthew", "Guizar");
myCustomer.firstName = "Matte";
console.log(myCustomer);
