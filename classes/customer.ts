class Customer {
    private first: String;
    private last: String;

    constructor(theFirst: String, theLast: String){
        this.first = theFirst;
        this.last = theLast
    }

    get firstName(): String {
        return this.first;
    }
    set firstName(value: String){
        this.first = value;
    } 

    get LastName(): String {
        return this.last;
    }

    set LastName(theLast: String){
        this.last = theLast;
    }


}

let myCustomer = new Customer("Matthew", "Guizar");

myCustomer.firstName = "Matte";

console.log(myCustomer);


