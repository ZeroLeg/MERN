import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render(){
        return (
            <h1>Esto es un test 1</h1>
        )
    }
}

render(<App/>, document.getElementById('app'));