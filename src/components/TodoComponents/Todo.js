import React from 'react';


const Todo = props => {
    console.log('todo', props)
    return (
      <div className={`todo${props.item.done ? ' done' : ''}`}
        /* if 'done: true' then classname = "todo done" else classname="todo" */
        onClick={() =>  props.toggleDone(props.item.id)}
        >
        <p className="todoItem">{props.item.todo}</p>
      </div>
    )
  };
  
  export default Todo

