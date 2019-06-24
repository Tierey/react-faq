import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

// next == dispatch
const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  console.log(action)
  //console.log(action.type, getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  console.log(action)
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


function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action({dispatch, state:getState(), extraArgument});
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

const store = createStore(reducer, applyMiddleware( 
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
