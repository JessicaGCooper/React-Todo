import React from 'react';


class TodoForm extends React.Component {
 
    //store state
    constructor() {
        super();
        this.state = {
            newTodo: ''            
        };
    }

    //create handler functions (class method to update state)

    //handleChanges in this case changes the 'todo' as it's being typed
    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    //handleSubmit in this case is adding the new object with it's new state to the list
    //the previously defined addTodo() function (passed down from App.js as props) is what sets that 'todo' is what is going to be changed
    handleSubmit = e => {
        e.preventDefault();
        console.log("it's working")
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });//this line resets the form field to blank after submission
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="addTodo">Add an Obstacle to Freedom</label>
                <input 
                type="text"
                name="addTodo"
                id="addTodo"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                />
                <button>Add Obstacle</button>
            </form>
        )
    }
};

export default TodoForm