'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
    }
};

var removeAll = function removeAll(e) {
    e.preventDefault();
    app.options = [];
    console.log(app.options);
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    console.log(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options: ' : 'No options.'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0 ? true : false, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();