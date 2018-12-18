console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
        console.log(app.options);
    }
};

const removeAll = (e) => {
    e.preventDefault();
    app.options = [];
    console.log(app.options);
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    
    console.log(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>
                {app.options.length > 0 ? 'Here are your options: ' : 'No options.'}
            </p>
            <button disabled={app.options.length === 0 ? true : false} onClick={onMakeDecision}>What should I do?</button>
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map(option => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            
            <button onClick={removeAll}>Remove All</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();