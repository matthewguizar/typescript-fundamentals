"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
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
exports.Customer = Customer;
let myCustomer = new Customer("Matthew", "Guizar");
myCustomer.firstName = "Matte";
console.log(myCustomer);
