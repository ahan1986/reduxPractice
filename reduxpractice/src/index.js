// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


const initialStore = {
    result: 1,
    lastValues: []
};

const reducer = ( state = initialStore , action ) => {
  switch (action.type) {
    case "ADD":
        state.result += action.payload;
        break;
    case "SUBTRACT":
        state.result -= action.payload;
        break;
  }
  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'ADD',
    payload: 10
});