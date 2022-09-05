import React, { useEffect, useState } from "react";

import Checkbox from './Checkbox';

import '../SCSS/Form.scss';

const Form = () => {

    const[descriptionChecked, setDescription] = useState(false);
    const[priorityChecked, setPriority] = useState(false);
    const[descriptionValue, setDescriptionValue] = useState("")
    const[priorityState, setPriorityState] = useState({high: false, medium: false, low: false});

    const handleSetDescription = () => setDescription(!descriptionChecked);
    const handleSetPriority = () => setPriority(!priorityChecked);
    const handleSetTxtAreaValue = (e) => setDescriptionValue(e.target.value);

    const handleSetPriorityState = (e) => {
        if(e.target.id === "priority-high"){
            priorityState.high ? 
                setPriorityState({high: false, medium: false, low: false}) :
                setPriorityState({ high: true, medium: false, low: false});
        }
        else if(e.target.id === "priority-medium"){
            priorityState.medium ? 
                setPriorityState({high: false, medium: false, low: false}) :
                setPriorityState({ high: false, medium: true, low: false});
        }
        else{
            priorityState.low ? 
                setPriorityState({high: false, medium: false, low: false}) :
                setPriorityState({ high: false, medium: false, low: true});
        }
    }

    useEffect(() => {
        if(!descriptionChecked){
            setDescriptionValue("");
        } 
        
        if (!priorityChecked){
            setPriorityState({high: false, medium: false, low: false});
        }
    }, [descriptionChecked, priorityChecked])

    return (
        <form action="">
            <div className="addOptions-grid">
                <Checkbox
                    id={"title"}
                    className={"checkbox-general"}
                    label={"Title"}
                    disabled={true}
                    checked={true}
                />
                <Checkbox
                    id={"description"}
                    className={"checkbox-general"}
                    label={"Description"}
                    checked={descriptionChecked}
                    onChange={handleSetDescription}
                />
                <Checkbox
                    id={"priority"}
                    className={"checkbox-general"}
                    label={"Priority"}
                    checked={priorityChecked}
                    onChange={handleSetPriority}
                />
            </div>

            <input type="text" name="" id="txt" placeholder="Title"/>

            <textarea 
                className={descriptionChecked ? "collapse" : "hide"} 
                name="" id="txtArea" 
                cols="auto" 
                rows="10" 
                placeholder="Description" 
                value={descriptionValue}
                onChange={handleSetTxtAreaValue}>
            </textarea>

            <div className={`priority-grid ${priorityChecked ? "collapse-priorityGrid" : "hide-priorityGrid"}`}>
                <h3>Priority</h3>
                <Checkbox
                    id={"priority-high"}
                    className={"checkbox-general"}
                    label={"High"}
                    checked={priorityState.high}
                    onChange={handleSetPriorityState}
                />
                <Checkbox
                    id={"priority-medium"}
                    className={"checkbox-general"}
                    label={"Medium"}
                    checked={priorityState.medium}
                    onChange={handleSetPriorityState}
                />
                <Checkbox
                    id={"priority-low"}
                    className={"checkbox-general"}
                    label={"Low"}
                    checked={priorityState.low}
                    onChange={handleSetPriorityState}
                />
            </div>
            <button className="addTodo">
                <span className="add-icon"></span>
                Add
            </button>
        </form>
    );
}

export default Form;