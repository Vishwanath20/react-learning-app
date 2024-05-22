import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import todoReducer from './redux-example/reducers';
import counterReducer from './redux-example/counterReducer';
import counterAppSlice from './redux-toolkit-example/counterAppSlice';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import dataFetchReducer from './redux-example/FetchDataReducer';


// Combine multiple reducers into a single root reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    counterApp:counterAppSlice,
    dataFetchApp:dataFetchReducer
  });

  //const enhancers = [composeWithDevTools(), applyMiddleware(thunk)];
//const store = createStore(rootReducer, compose(...enhancers));

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;