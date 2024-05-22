import { ADD_TODO } from './actions';
const initialState = {
    todos: []
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { text: action.text }]
        };
      default:
        return state;
    }
  }
  
  export default todoReducer;
