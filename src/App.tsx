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

  return (
    <div className="App">
      <h1 className='title'>Todoリスト</h1>

      <form onSubmit={(e) => handleSubmit(e)} className='form'>
        <input type="text" onChange={(e) => handleChange(e)} className='form__input' />

        <input type="submit" value="作成" className='form__submit' />
      </form>
    </div>
  );
}

export default App;
