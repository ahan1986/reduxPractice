import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store from './store';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';



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

//creating a middleware. (store) function uses (next) function which passes to the (action) function then it has a function body that we can do anything and use the three arguments of the function used.
const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    //execute next(action) which is provided and we need this to continue the action to get to the reducer
    next(action);
}

const store = createStore(combineReducers({
        mathReducerGuy: mathReducer,
        userReducerGuy: userReducer
    }), 
        {}, 
        applyMiddleware(createLogger())
    );

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});


// the provider only provides the store. You need to connect and set up another function to connect react with redux and it's states
ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));