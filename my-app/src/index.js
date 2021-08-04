//Import react and reactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';

//Create React component
const App = () => {
    const butttonText = "Click Me!";
    return (
    <div>
    <label class="label" for="name">
      Enter name:
    </label>
    <input id="name" type="text" />
    <button style={{ backgroundColor: "blue", color: "white" , border: "2px solid red"}}>
      {butttonText}
    </button>
  </div>
    );
} 

//Pick React component and show it on screen
ReactDOM.render(<App/>, document.querySelector('#root'));