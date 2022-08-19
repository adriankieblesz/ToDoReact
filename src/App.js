import { useEffect, useState } from 'react';

import './App.css';

import AddButton from './components/JS/AddButton';
import Header from './components/JS/Header';
import Form from './components/JS/Form'
import TodoList from './components/JS/TodoList';


function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});

  

  return (
    <div className="App">
      <div className="main-container">
        <Header/>
        <div className="top-container">
          <AddButton
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
          <Form/>
        </div>
        <div className="bottom-container">
          <TodoList
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
