import React from 'react';

const Option = (props) => (
    <div className="option">
        {props.optionText && <p className="option__title">{props.optionText}</p>}
        <button 
            className="button button--link"
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;