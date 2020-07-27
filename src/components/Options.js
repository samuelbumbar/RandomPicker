import React from 'react';
import Option from './Option';

// Stateless Functional Component
const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                className='button button--link' 
                onClick={props.handleDeleteOptions}
            >
                RemoveAll
            </button>
        </div>
        {/* <ol>{this.props.options.map((option) => <li key={option}><Option option={option} /></li>)}</ol> */}
        {!props.options.length && <p className='widget__message'>Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;