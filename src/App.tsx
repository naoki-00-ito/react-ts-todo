import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create New Todo
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);

    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1 className='title'>Todoリスト</h1>

      <form onSubmit={(e) => handleSubmit(e)} className='form'>
        <input type="text" onChange={(e) => handleChange(e)} className='form__input' />

        <input type="submit" value="作成" className='form__submit' />
      </form>

      <ul className='todo-list'>
        {todos.map((todo) => (
          <li key={todo.id} className='todo-list__item'>
            <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} value={todo.inputValue} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
