import React from "react";

import '../SCSS/AddButton.scss';

const AddButton = ({todo, todos, setTodos}) => {
    
    const handleClick = () => {
        setTodos([...todos, todo])
        console.log(todos);
    }

    return (
        <button className="addBtn" type="submit" onClick={handleClick}>Add task</button> 
    );
}

export default AddButton;