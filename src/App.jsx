import React, { Component } from 'react';
import './App.css';
import Counter from './container/appContainer';

class App extends Component {
   render() {
      return (
         <div className = "App">
            
               <Counter/>
            
         </div>
      );
   }
}
export default App;
