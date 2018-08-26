// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();




const mathReducer = ( state = {
    result: 1,
    lastValues: []
} , action ) => {
  switch (action.type) {
    case "ADD":
        state = {
            ...state,
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
        }
        
        break;
    case "SUBTRACT":
        state = {
            result: state.result,
            lastValues: [],
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
        
        break;
  }
  return state;
}

// another reducer for users
const userReducer = ( state = {
    name: 'Andrew',
    age: 31
} , action ) => {
    switch (action.type) {
      case "SET_NAME":
          state = {
              ...state,
              name: action.payload
          }
          
          break;
      case "SET_AGE":
          state = {
              ...state,
              name: action.payload
          };
          
          break;
    }
    return state;
  }

const store = createStore(combineReducers({
    mathReducer,
    userReducer
}));

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