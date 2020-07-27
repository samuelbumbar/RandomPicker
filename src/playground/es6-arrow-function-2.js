// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments); // "arguments" has a list with all the arguments, even if we pass more that the arguments accepted by the function
    return a + b;
}

const addVerbose = (a, b) => {
    // console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return a + b;
}

console.log(addVerbose(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Samuel',
    cities: ['Sighetu Marmatiei', 'Cluj-Napoca', 'Reghin', 'Ruscova'],
    // printPlacesLived: function () {  // ES5 type definition
    printPlacesLived() {     // ES6 type definition
        console.log(this.name);
        console.log(this.cities);

        // const that = this;

        // this.cities.forEach(function (city) {
        //     // console.log(this.name + ' has lived in ' + city); // Doesn't work because "this" keyword doesn't get in bound regular anonymous functions like the one situated in the "foreach" loop
        //     console.log(that.name + ' has lived in ' + city); // Doesn't work because "this" keyword is not defined in regular anonymous functions (it is not bound)
        // });

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city); // Works because arrow functions use the values of the context they were created in (they don't bind it by their own)
        });
    },
    returnPlacesLived() {
        return this.cities.map((city) => {
            // return city; // Returns a new array with the same items as the old array
            return this.name + ' has lived in ' + city; // Returns a new array with the transformed items
        });
    },
    returnPlacesLivedShorthand() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.returnPlacesLivedShorthand());

// Challenge area

const multiplier = {
    numbers: [10, 20, 30], // numbers - array of numbers
    multiplyBy: 3,      // multilpyBy - single number
    multiply() {        // multiply - return a new array where the numbers have been multiplies
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2 -> [2, 4, 6]