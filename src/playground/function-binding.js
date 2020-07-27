const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};
  
console.log(obj.getName());     // Working [1]

const getName = obj.getName;    // [2]
// const getNameBinded = obj.getName.bind();                    // Not working (Uncaught TypeError: Cannot read property 'name' of undefined)
// const getNameBinded = obj.getName.bind({ name: 'Andrew' });  // Working (We are referencing a new object with "name" attribute defined as 'Andrew')
const getNameBinded = obj.getName.bind(obj);                    // Working

// console.log(getName());      // Not working (Uncaught TypeError: Cannot read property 'name' of undefined)
console.log(getNameBinded());   // Working

const func = function () {
    console.log(this);
}
func();  // Printing on the console: undefined

class HandleClass extends React.Component {
    constructor(props) {                        // Overriding
        super(props);
        this.handleFunctionReferenceConstuctorBinded = this.handleFunctionReferenceConstuctorBinded.bind(this); // [6]
    }
    handleFunctionReference() {                 // [3] Event reference function is called - it doesn't keep the variable "this" until the event is triggered.
        // NOT WORKING
        console.log("handleFunctionReference", this.props.options); 
    }
    handleFunctionCall() {                      // [4] Event call function is called - it calls the function once at the start of the program and then it isn't called anymore.
        console.log("handleFunctionCall", this.props.options);
    }
    handleFunctionReferenceBinded() {           // [5] Event reference function with binded with "this" variable - binds the variable "this" to be able to call it when the event is triggered.
        console.log("handleFunctionReferenceBinded", this.props.options);
    }
    handleFunctionReferenceConstuctorBinded() { // [6] Event reference function with binded with "this" variable - binds the variable "this" to be able to call it when the event is triggered.
        console.log("handleFunctionReferenceConstuctorBinded", this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleFunctionReference}>Press Function Reference</button>
                <button onClick={this.handleFunctionCall()}>Press Function Call</button>
                <button onClick={this.handleFunctionReferenceBinded.bind(this)}>Press Function Reference Binded</button>
                <button onClick={this.handleFunctionReferenceConstuctorBinded}>Press Function Reference Constructor Binded</button>
            </div>
        );
    }
}

ReactDOM.render(<HandleClass options={[1, 2, 3, 4, 5]} />, document.getElementById('app'));

/** Explanation
 * “obj.getName” [1] is in the context of an object and we have access to that object using “this” binding
 * When we break it up into a function like “getName” [2] we actually lose that context, the context is not transferred and we get a regular function.
 * Regular functions have undefined for their “this” by default.
 * We need to set the “this” binding in certain situations and we will do that using the “bind” method available on functions in JS to bind what we intend (2) (we bind the “obj” object - the corresponding “this” keyword to bring the context back).
 * In the context of a class if:
 *      - Event reference function is called [3] it doesn't keep the variable "this" until the event is triggered.
 *      - Event call function is called [4] it calls the function once at the start of the program and then it isn't called anymore.
 *      - Event reference function with binded with "this" variable [5] and [6] binds the variable "this" to be able to call it when the event is triggered.
 * References: mdn bind - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
 */