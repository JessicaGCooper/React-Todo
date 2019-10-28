// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

import Todo from './Todo';

const TodoList = (props) => { 
    console.log('TodoList Props', props)
    return (
        <div className="TodoList">
           {props.todoItems.map( item => (
               <Todo
               key={item.id} 
               item={item}
               toggleDone={props.toggleDone}
               />
           ))}
           <button className="clearButton" onClick={props.filterDone} >Remove Obstacles</button>     
        </div>
    );
}
    
export default TodoList;