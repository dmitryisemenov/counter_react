import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

        this.state = {
            counter: 0,
            isCounterShown: true 
        };
    }

    handleToggleCounter = () => {
        this.setState((prevState) => ({ isCounterShown: !prevState.isCounterShown }));
    }

    plusCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter += 1
            
        }))
    }

    minusCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter -= 1
        }))
    }

    render() {
        const { counter, isCounterShown } = this.state;

        return (
            <React.Fragment>
                {
                    isCounterShown
                    ? counter
                    : null
                }
                <br></br>
                <Button style={{ color: 'navy'}} label="Plus" onClick={this.plusCounter} />
                <Button style={{ color: 'red' }} label="Minus" onClick={this.minusCounter} />
                <Button style={{ color: isCounterShown ? 'orange' : 'lightgreen' }} label={isCounterShown ? "Hide" : "Show"} onClick={this.handleToggleCounter} />
                <br></br>
                {
                    counter === 10 && 'Аллилуйя'
                }
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
);