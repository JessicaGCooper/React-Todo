// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import styled from 'styled-components';

import Todo from './Todo';

const TodoList = (props) => { 
    console.log('TodoList Props', props)
    return (
        <TodoListItems className="TodoListItems">
           {props.todoItems.map( item => (
               <Todo
               key={item.id} 
               item={item}
               toggleDone={props.toggleDone}
               />
           ))}
           <ClearButton className="clearButton" onClick={props.filterDone} >Remove Obstacles</ClearButton>     
        </TodoListItems>
    );
}
    
export default TodoList;

const TodoListItems = styled.div`
    width: 50%;
    margin-right: 25%;
    margin-left: 25%;
`;

const ClearButton = styled.button`
    width: 40%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e8ea0;
    border: 2px solid #2e8ea0;
`;