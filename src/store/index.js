import { createStore, applyMiddleware } from 'redux';
//import thunkMiddleware from 'redux-thunk';
import thunk from "../utils/thunk"
import reducer from '../reducers';

// next == dispatch
const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log("log : ",action)
  
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
 
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }

  if(action === undefined) {
    return next({
      type:"NO_ACTION"
    })
    
  }

  return next(action);
};




const store = createStore(reducer, applyMiddleware( 
  //thunkMiddleware, 
  thunk,
  stringMiddleware, 
  logMiddleware 
));


// const delayedActionCreator = (timeout) => (dispatch) => {
//   setTimeout(() => dispatch({
//     type: 'DELAYED_ACTION'
//   }), timeout);
// };

// store.dispatch(delayedActionCreator(3000));

export default store;
