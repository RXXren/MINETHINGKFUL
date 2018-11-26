import React, { Component } from 'react';
import Home from "./home/homepage";
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store={ store}>
     <div>
       <Home/>
     </div>
        </Provider>
    );
  }
}

export default App;
