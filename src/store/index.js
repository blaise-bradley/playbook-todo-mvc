import { combineReducers, createStore as createReduxStore } from 'redux';
import { FILTERS } from '../constants/filter';

import { todosReducer } from './reducers/todo';
import { filterReducer } from './reducers/filter';

const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const defaultState = {
  todos: [
    {
      name: 'Work at Playbook',
      completed: false,
      id: 0
    },
    {
      name: 'Start TODO challenge',
      completed: true,
      id: 1
    }
  ],
  filter: FILTERS.all
};
export const createStore = (state = defaultState) => createReduxStore(reducers, state, storeEnhancer);
