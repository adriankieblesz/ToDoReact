import React, { useEffect } from 'react';

import Todo from './Todo';

import '../SCSS/TodoList.scss';

const TodoList = ({todos, setTodos}) => {

const handleDelete = (id) => {
    const newArr = todos.filter(todo  => todo.id !== id);
    setTodos(newArr);
}
    return(
        <div className="todo-container">
            <ul>
                {todos && todos.map((todo, index) => {
                    return <Todo 
                                key={index}
                                todo = {todo}
                                handleDelete={() => handleDelete(index)}
                            />;
                })}
            </ul>
        </div>
    );
}

export default TodoList;