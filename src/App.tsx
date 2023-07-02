import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Todoリスト</h1>

      <form onSubmit={() => {}} className='form'>
        <input type="text" onChange={() => {}} className='form__input' />

        <input type="submit" value="作成" className='form__submit' />
      </form>
    </div>
  );
}

export default App;
