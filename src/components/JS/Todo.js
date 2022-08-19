import React from "react";

const Todo = ({todo, handleDelete}) => {
    return (
        <li>
            <div className="todo">
                <div className="todo-text">{todo.text}</div>
                <div className="todo-date">{Date.now().toString()}</div>
                <button className="btn-completed">Completed</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
}

export default Todo;
