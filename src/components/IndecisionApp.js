import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

// Class based Component
export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    // Class property
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }
    // Class property
    handleDeleteOption = (option) => {
        this.setState((previousState) => ({
            options: previousState.options.filter((filteredOption) => filteredOption !== option)
        }));
    }
    // Class property
    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption: option
        }));
    }
    // Class property
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }
    // Class property
    handleAddOption = (option) => {
        // Validation
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option)> -1) {
            return 'This option already exists';
        }
  
        this.setState((previousState) => ({ options: previousState.options.concat(option) }));
    }
    // Class method
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
    // Class method
    componentDidUpdate(previousProps, previousState) {  // It gets called after the component 'props' or 'state' changes
        if (previousState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('[saving data]');
        }
    }
    // Class method
    componentWillUnmount() {  // It gets called before a component goes away (the screen changes)
        console.log('componentWillUnmount');
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}