import React from 'react';
import styled from 'styled-components';

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
  },
  {
    todo: 'Escape Alien',
    id: 1528817084378,
    done: false
  },
  {
    todo: 'Find Paperwork',
    id: 1528837084378,
    done: false
  },
  {
    todo: 'Avoid Crocodiles',
    id: 1528817084378,
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
      <AppContainer className="AppContainer">
        <div className='AppTop'>
          <section className='listHeader'>
            <ListHeading className="listHeading">Welcome to Life's Obstacle Course!</ListHeading>
            <ListSubHeading>Each Obstacle you overcome gets you closer to freedom.</ListSubHeading>
            <ListSubHeading>When you see an Obstacle you must add it to the list.</ListSubHeading>
            <Message>May the odds ever be in your favor!</Message>
          </section>
          <section className="TodoFormContainer">
            <TodoForm 
              addTodo={this.addTodo}
            />
          </section>
          <section className='TodoList Container'>      
            <TodoList 
              todoItems={this.state.todoItems}
              toggleDone={this.toggleDone}
              filterDone={this.filterDone} 
            /> 
          </section>
        </div>
    </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
width: 80%;
margin-right: 10%;
margin-left: 10%;
`;

const AppContent = styled.section``;

const ListHeader = styled.section``;

const ListHeading = styled.h2`
color: #2d6071;
font-size: 2.25rem;
padding: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;
text-transform: uppercase;
margin-top: 20px;
`;

const ListSubHeading = styled.h3`
color: #2d6071;
font-size: 1.5rem;
padding: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;`;

const Message = styled.h4`
color: #2d6071;
font-size: 1rem;
padding: 10px;
text-align: center;
font-family: 'Montserrat', sans-serif;
`;
