import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import TodoList from './components/TodoList';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <MainContent />
        <TodoList />
        <Button />
        <Footer/>
      </div>
    );
  }
}

export default App;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex