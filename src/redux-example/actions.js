export const ADD_TODO = 'ADD_TODO';

export function addTodo(text) {
  console.log("inside action text is::",text);
  return { type: ADD_TODO, text };
}