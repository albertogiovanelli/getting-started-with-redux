import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo';
import VisibileTodoList from './containers/VisibileTodoList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddTodo/>
          <VisibileTodoList/>
          <Footer/>
      </div>
    );
  }
}

export default App;
