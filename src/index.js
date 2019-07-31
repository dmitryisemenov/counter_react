import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            isCounterShown: true
        };

        this.plusCounter = this.plusCounter.bind(this);
        this.minusCounter = this.minusCounter.bind(this);
    }

    plusCounter = () => {
        this.setState((prevState) => ({
            counter: ++prevState.counter
            
        }))
    }

    minusCounter = () => {
        this.setState((prevState) => ({
            counter: --prevState.counter
        }))
    }

    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        const { style, label } = this.props;

        return (
            <button style={style} onClick={this.props.onClick}>
                {label}
            </button>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isCounterShown: true };

        this.handleToggleCounter = this.handleToggleCounter.bind(this);
    }

    handleToggleCounter() {
        this.setState((prevState) => ({ isCounterShown: !prevState.isCounterShown }));
    }

    render() {
        const { isCounterShown } = this.state;

        return (
            <React.Fragment>
                {
                    isCounterShown
                    ? <Counter isCounterShown={isCounterShown} />
                    : null
                }
                <Button style={{ color: 'navy'}} label="Plus" onClick={this.plusCounter} />
                <Button style={{ color: 'red' }} label="Minus" onClick={this.minusCounter} />
                <Button style={{ color: isCounterShown ? 'orange' : 'lightgreen' }} label={isCounterShown ? "Hide" : "Show"} onClick={this.handleToggleTimer} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
);