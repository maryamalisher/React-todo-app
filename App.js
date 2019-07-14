import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todo} from './components/todo';
 
class App extends React.Component{

  render(){
    return(
      <div className="App">
        <Todo/>
      </div>
    )
  }
}


export default App;
