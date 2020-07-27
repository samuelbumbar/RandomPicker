class Person {
    constructor(name = 'Anonymous', age = 0) {
        //  this.name = name || 'test';
        this.name = name;
        this.age = age;

        // console.log('test');
    }
    getGreeting() {
        // return 'Hi! I am ' + this.name + '!';
        return `Hi. I am ${this.name}!`;    // Using template strings
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    getDescription() { // overridden
        let description = super.getDescription();

        if (this.hasMajor())
            description += ` Their major is ${this.major}.`;

        return description;
    }
    hasMajor() {
        // '' -> returns false
        // !'' -> returns true
        // !!'' -> returns false (the real value of '')
        // So !!'test' -> returns true; !!undefined -> returns false
        return !!this.major;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() { // overridden
        let greeting = super.getGreeting();

        if (this.hasHomeLocation())
            greeting += ` I'm visiting from ${this.homeLocation}.`;

        return greeting;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
}


const me = new Person('Samuel Bumbar', 25);
console.log(me);
console.log('me.getGreeting()', me.getGreeting());
console.log('me.getDescription()', me.getDescription());

const other = new Person();
console.log(other);
console.log('other.getGreeting()', other.getGreeting());
console.log('other.getDescription()', other.getDescription());


const meStudent = new Student('Samuel Bumbar', 25, 'Computer Science');
console.log(meStudent);
console.log('meStudent.getGreeting()', meStudent.getGreeting());
console.log('meStudent.getDescription()', meStudent.getDescription());
console.log('meStudent.hasMajor()', meStudent.hasMajor());

const otherStudent = new Student();
console.log(otherStudent);
console.log('otherStudent.getGreeting()', otherStudent.getGreeting());
console.log('otherStudent.getDescription()', otherStudent.getDescription());
console.log('otherStudent.hasMajor()', otherStudent.hasMajor());


const meTraveler = new Traveler('Samuel Bumbar', 25, 'Sighetu Marmatiei, Romania');
console.log(meTraveler);
console.log('meTraveler.getGreeting()', meTraveler.getGreeting());
console.log('meTraveler.getDescription()', meTraveler.getDescription());
console.log('meTraveler.hasHomeLocation()', meTraveler.hasHomeLocation());

const otherTraveler = new Traveler(undefined, undefined, 'Nowhere');
console.log(otherTraveler);
console.log('otherTraveler.getGreeting()', otherTraveler.getGreeting());
console.log('otherTraveler.getDescription()', otherTraveler.getDescription());
console.log('otherTraveler.hasHomeLocation()', otherTraveler.hasHomeLocation());