import React from 'react';

const Header = (props) => (
    <div className = "header">
        <div className = "container">
            <h1 className = "header__title">{props.title}</h1>
            {props.subtitle && <p className = "header__subtitle">{props.subtitle}</p>}
        </div> 
    </div>
);

Header.defaultProps = {
    title: 'ToDo List',
    subtitle: 'A to-do list that suggests what to do next.'
};

export default Header;