const square = function (x) {
    return x * x;
};

const squareArrowVerbose = (x) => {
    return x * x;
};

const squareArrowShorthand = (x) => x * x;

console.log(squareArrow(8));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function using verbose syntax
// Create arrow function using shorthand syntax

const getFirstNameVerbose = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameShorthand = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameHand('Mike Smith'));