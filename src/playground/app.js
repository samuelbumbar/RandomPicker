// Class based Component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() { // It gets called after the component gets rendered by DOM
    try {
      const json = localStorage.getItem('options');

      // if (json == null) // If the item hasn't been saved in the localStorage
      //   return;

      const options = JSON.parse(json);

      if (options) {  // Checks if the item has been saved in the localStorage
        this.setState(() => ({ options }));
      }

      console.log('[fetching data]');
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(previousProps, previousState) {  // It gets called after the component 'props' or 'state' changes
    if (previousState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('[saving data]');
    }
  }
  componentWillUnmount() {  // It gets called before a component goes away (the screen changes)
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(option) {
    this.setState((previousState) => ({
      options: previousState.options.filter((filteredOption) => filteredOption !== option)
    }));
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }
  handleAddOption(option) {
    // Validation
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option)> -1) {
      return 'This option already exists';
    }

    this.setState((previousState) => ({ options: previousState.options.concat(option) }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';
    
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

// Stateless Functional Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

// Stateless Functional Component
const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick} 
        disabled={!props.hasOptions}
      >
        What should I do?
        </button>
    </div>
  );
};

// Stateless Functional Component
const Options = (props) => {
  return (
    <div>
        <button onClick={props.handleDeleteOptions}>RemoveAll</button>
        {/* <ol>{this.props.options.map((option) => <li key={option}><Option option={option} /></li>)}</ol> */}
        {!props.options.length && <p>Please add an option to get started!</p>}
        {
          props.options.map((option) => (
            <Option 
              key={option} 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
  );
};

// Stateless Functional Component
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => props.handleDeleteOption(props.optionText)}
      >
        remove
      </button>
    </div>
  );
};

// Class based Component
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {  // Event handler cl ass method
    e.preventDefault(); // Stops full page refresh

    // Trim function trims the space before and after the text (but not the space from inside the text, e.g. For "    Samuel Bumbar  " will have "Samuel Bumbar")
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    // This "setState" is identical with "error: error" if the state obj name is identical with the other object we can use this shorthand syntax
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <label>
            Name:
            <input type="text" name="option" />
          </label>
          {/* <input type="submit" value="Add Option" /> */}
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));