import React from 'react';

// Class based Component
export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    // Class property
    handleAddOption = (e) => {  // Event handler cl ass method
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
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' type="text" name="option" />
                    {/* <input type="submit" value="Add Option" /> */}
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}