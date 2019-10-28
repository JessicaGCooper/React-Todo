import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

//ToDoList Array
const data = [
  {
    todo: 'Wash Hair',
    id: 1528817077286,
    done: false
  },
  {
    todo: 'Clean Room',
    id: 1528817084358,
    done: false
  }
];

class App extends React.Component {
//store state
  constructor() {
    super();
    this.state = {
      todoItems: data 
    };
  }

//create handler functions (class methods to update state)

//addTodo handler function 

  addTodo = todo => {

    const newTodo = {
      todo: todo,
      id: Date.now(),
      done: false
    }

    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    });
  };

// filterDone handler function

filterDone = () => {
  this.setState({
    todoItems: this.state.todoItems.filter(item => {
      return item.done === false;
    })
  })
};

//toggleDone handler function

  toggleDone = id => {

    this.setState({
      todoItems: this.state.todoItems.map(item =>{
        if (item.id === id){
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to Life's Obstacle Course!</h2>
          <h3>Each Obstacle you overcome gets you closer to freedom!</h3>
          <h3>When you see an Obstacle you must add it to the list!</h3>
          <h4>May the odds ever be in your favor!</h4>
          <TodoForm 
            addTodo={this.addTodo}
          />
        </div>      
        <TodoList 
          todoItems={this.state.todoItems}
          toggleDone={this.toggleDone}
          filterDone={this.filterDone} 
          /> 
      </div>
    );
  }
}

export default App;
