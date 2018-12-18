class IndecisionApp extends React.Component {
    
    render() {
        const title = "Indecision";
        const subtitle = "There is a lot of interesting interaction in this toDo list application";
        const options = ['Thing One', 'Thing Two', 'Thing Three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
        </div>
        )
    }
};

class Action extends React.Component {
    handlePick() {
        alert('{handlePick}');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
};

class Options extends React.Component {
    handleRemoveAll() {
        alert('handle Remove All');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p> Here are your options:</p>
                {this.props.options
                    .map(option => <Option key={option} optionText={option}/>)} 
            </div>
        );
    }
};

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
};

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert('handle Add Option');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
};

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));