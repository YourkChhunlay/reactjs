import React, { Component } from 'react'; // Correct way to import React
import logo from './logo.svg';
import './App.css';
// import  Greet  from './components/Greet'; // Assuming Greet is the default export in './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <Greet /> */}
        <Welcome />
        {/* <Hello /> */}
      </div>
    )
  }
}
export default App;
  