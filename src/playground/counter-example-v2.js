// The counter app is implemented using State and Components

class Counter extends React.Component {
    constructor(props) {    // Overriding
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount);

        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(previousProps, previousState) {
        if (previousState.count !== this.state.count)
            localStorage.setItem('count', this.state.count);
    }
    handleAddOne() {
        // this.state.count = this.state.count + 1;
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            };
        });
        
        console.log('handleAddOne', this.state);
    }
    handleMinusOne() {
        this.setState((previousState) => {
            return {
                count: previousState.count - 1
            }
        });
        console.log('handleMinusOne', this.state);
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });

        // TEST
        // this.setState((previousState) => { // "previousState" gets updated after each "setState()" call
        //     return {
        //         count: previousState.count + 1
        //     };
        // });

        // Second implementation:
        // this.setState({ // older alternative version
        //     count: 0
        // });
        // this.setState({ // for using the current version
        //     count: this.state.count + 1
        // });
        // the final value will be the one, ignoring the set to 0, because setState functino is asyncronous (it doesn't update the value until the next line of execution)
        // "setState" is async because it makes the ReactDOM representation, figuring out what stuff it needs to change and only then it updates the value of "this.state" with simplified commands, not setting to 0 the "count" variable anymore.
        // The proper solution is to use the "setState" function with an updater function
        console.log('handleReset', this.state)
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));