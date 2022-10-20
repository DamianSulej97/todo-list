import React, { useState } from "react";

function Todo(props) {
	const [toggle, setToggle] = useState(true);
	const [todoName, setTodoName] = useState("");

	function toggleInput() {
		setToggle(false);
		setTodoName(props.name);
	};

	function handleEdit(e) {
		setTodoName(e.target.value);
	};

	function handleKeyDown(e) {
    	if (e.key === "Escape") {
    		setToggle(true);
    	}
    	if (e.key === "Enter") {
      		if (e.target.value === ""){
    			props.deleteTask();
    		} else {
				setToggle(true);
				props.onTodoNameUpdated(todoName);
    		};
		};
    };

	function onBlur() {
		setToggle(true);
		props.onTodoNameUpdated(todoName);
	};

  	return (
    <li>
    	<div className="view">
        	<input
        		id={props.id}
        		name="todos"
        		className="toggle"
        		type="checkbox"
        		checked={props.completed}
        		onChange={props.toggleTaskCompleted}
			/>
        	<label
        		htmlFor="todos"
        		className="todo-item"
        		onDoubleClick={toggleInput}
        	>
        	{toggle ? (
    			`${props.name}`
      		) : (
        		<form>
        	    	<input
        	    	className="todo-edit"
        	    	type="text"
        	    	value={todoName}
        	    	onChange={handleEdit}
        	    	onKeyDown={handleKeyDown}
                    autoFocus
                    onBlur={onBlur}
                  />
                
        	    </form>
        	)}
        	</label>
    		<button className="remove" onClick={props.deleteTask}>
    			×
    		</button>
    	</div>
    </li>
  	);
};

export default Todo;
