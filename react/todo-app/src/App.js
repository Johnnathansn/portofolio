import React, { Component } from 'react';
import TodoForm from './TodoForm.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
          <div className="App">
            <header className="App-header">
                <h1>Project 1</h1>
            </header>
            <main className="appMain">
                <TodoForm />
            </main>
          </div>
        );
    }
}

export default App;
