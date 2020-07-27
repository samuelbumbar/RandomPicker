// Variable declaring

var nameVar = 'Andrew';
nameVar = 'Mel';                // Working
var nameVar = 'Mike';           // Working
console.log('nameVar', nameVar);// Printed: Mike

let nameLet = 'Jen';
nameLet = 'Julie';              // Working
// let nameLet = "Jenny";       // Not working
console.log('nameLet', nameLet);// Printed: Julie

const nameConst = 'Frank';
// nameConst = "Gunth";             // Not working
// const nameConst = "Ben";         // Not working
console.log('nameConst', nameConst);// Printed: Frank

// Function scoping

function getPetName() {
    var petName = "Hal";
    return petName;
}
console.log('getPetName()', getPetName());
// console.log('petName', petName); // Not working


// Block-level scoping

var fullName = 'Andrew Mead';
let firstNameLetGlobal = 'Dio';
const firstNameConstGlobal = fullName.split(' ')[0];
var nameVarGlobal = 'Gil';
let nameLetGlobal = 'Deorde';

if (fullName) {
    var nameVarBlockLocal = "Val";
    var nameVarGlobal = 'Will';
    let nameLetGlobal = 'Ion';
    console.log('nameVarGlobal', nameVarGlobal);                // Printed: Will
    console.log('nameLetGlobal', nameLetGlobal);                // Printed: Ion

    var firstNameVar = fullName.split(' ')[0];
    let firstNameLet = fullName.split(' ')[0];
    const firstNameConst = fullName.split(' ')[0];

    firstNameLetGlobal = fullName.split(' ')[0];
    // firstNameConstGlobal = fullName.split(' ')[1];           // Not working

    console.log('firstNameVar', firstNameVar);                  // Printed: Andrew
    console.log('firstNameLet', firstNameLet);                  // Printed: Andrew
    console.log('firstNameConst', firstNameConst);              // Printed: Andrew
    console.log('firstNameLetGlobal', firstNameLetGlobal);      // Printed: Andrew
    console.log('firstNameConstGlobal', firstNameConstGlobal);  // Printed: Andrew
}

console.log('nameVarGlobal', nameVarGlobal);                    // Printed: Will
console.log('nameLetGlobal', nameLetGlobal);                    // Printed: Deorde
console.log('nameVarBlockLocal', nameVarBlockLocal);            // Printed: Val
console.log('firstNameVar', firstNameVar);                      // Printed: Andrew
// console.log('firstNameLet', firstNameLet);                   // Not working outside of the code block that is defined
// console.log('firstNameConst', firstNameConst);               // Not working outside of the code block that is defined
console.log('firstNameLetGlobal', firstNameLetGlobal);          // Printed: Andrew
console.log('firstNameConstGlobal', firstNameConstGlobal);      // Printed: Andrew

// Conclusion:
// "var" is function scoped (does keep it's declaration / value outside of the block (like if, for etc.) it was declarated on, but doesn't keep it outside a function and if it is declared inside of a inner block it takes the new value globally).
// "let" is function scoped and is also block-level scoped (doesn't keep it declaration / value outside of the block it was declarated on and also outside of a function and if it is declared inside of a inner block it takes the new value only in that block, then getting back the previous value).
// "const" is function scoped and is also block-level scoped and works like let, but allowes only one assignation.