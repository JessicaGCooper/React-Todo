import React from 'react';
import styled from 'styled-components';


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
            <FormContainer onSubmit={this.handleSubmit}>
                <LabelContainer>
                    <LabelInput htmlFor="addTodo">Add an Obstacle to Freedom:</LabelInput>
                </LabelContainer>
                <AddObstacleInput
                type="text"
                name="addTodo"
                id="addTodo"
                value={this.state.newTodo}
                onChange={this.handleChanges}
                />
                <AddObstacle className="addObstacle">Add Obstacle</AddObstacle>
            </FormContainer>
        )
    }
};

export default TodoForm

const AddObstacle = styled.button`
    width: 40%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e8ea0;
    border: 2px solid #2e8ea0;
    font-weight: bolder;
`;

const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
`;

const LabelContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const LabelInput = styled.label`
    width: 100%;
    margin-right: 5px;
    padding: 15px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #3e7d20;
    text-align: right;
`;

const AddObstacleInput = styled.input`
    width: 40%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    font-size: 1.25rem;
    font-family: 'Montserrat', sans-serif;
    color: #2e8ea0;
    border: 2px solid #2e8ea0;
`;