import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation/Navbar';
import {BrowserRouter} from 'react-router-dom';
// import Background from './components/Background';

//App Component
class App extends Component {
  render() {
    return (
      //to route to different pages
      <BrowserRouter>
      {/* <div >
        <Navigation/> 
        </div> */}

             <div >        
      
          <Navigation/> 
      {/* <Background/> */}
    
          <Main/>
        </div>
      </BrowserRouter>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
