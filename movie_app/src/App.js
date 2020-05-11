import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    state = {
        count: 0,
    };

    plus = () => {
        this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState((current) => ({ count: current.count - 1 }));
    };

    render() {
        console.log('render');
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.plus}>Plus</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}

export default App;
