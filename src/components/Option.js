// We always must import 'React' because each element gets converted into React.createElement() calls. If we don't have 'Reactæ in scope we will get an error when we will try to run this.
import React from 'react';

// Stateless Functional Component
const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.optionText}</p>
        <button
            className='button button--link'
            onClick={(e) => props.handleDeleteOption(props.optionText)}
        >
            Remove
        </button>
    </div>
);

export default Option;