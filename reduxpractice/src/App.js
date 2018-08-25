import React, { Component } from 'react';
import { createStore } from 'redux';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
          
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;



const initialStore = {
    result: 1,
    lastValues: []
};

const reducer = ( state , action ) => {
  switch (action.type) {
    case "ADD":
      break;
    case "SUBTRACT":
      break;
  }
  return state;
}

const store = createStore(reducer, 1);

store.dispatch({
    type: 'ADD',
    payload: 100
})