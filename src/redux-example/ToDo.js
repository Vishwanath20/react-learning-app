import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import Counter from './Counter';
import FetchDataApp from './FetchData';

function ToDo({ todos, addTodo }) {
    const [inputValue, setInputValue] = useState('')

    const handleChange = event => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      addTodo(inputValue);
      setInputValue('');
    };
  
    return (
      <>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos && todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </div>
<Counter></Counter>

<FetchDataApp></FetchDataApp>
      </>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
  });

  const mapDispatchToProps = {
    addTodo
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ToDo);