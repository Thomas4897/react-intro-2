import React, { Component } from "react";
import "./App.css";
//! Added so we can us Unique Identifiers
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
  state = {
    todoArray: [
      {
        id: uuidv4(),
        todo: "Wash dishes",
      },
      {
        id: uuidv4(),
        todo: "Walk the dog",
      },
      {
        id: uuidv4(),
        todo: "Do homework",
      },
    ],
    newTodo: "",
    hasError: true,
    errorMessage: "Cannot submit an empty field",
  };

  handleOnInputChange = (event) => {
    // console.log(this.state.newTodo);
    this.setState({
      newTodo: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    console.log(this.state.newTodo);

    // (this.state.newTodo.length === 0) ? throw new Error("Cannot submit an empty field");

    // // this.state.toggle ? "blue" : "red",
    let newArray = [
      ...this.state.todoArray,
      { id: uuidv4(), todo: this.state.newTodo },
    ];

    this.setState({
      todoArray: newArray,
      newTodo: "",
    });
  };

  showTodoArray = () => {
    return (
      <ul>
        {this.state.todoArray.map(({ todo, id }) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    );
  };

  render() {
    const { newTodo } = this.state;
    // {
    //   console.log(this.state.hasError);
    // }
    return (
      //! Must always use 'className=[export class name]'
      <div className="App">
        <p>Todo List</p>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Todo: </label>
          <input
            name="newTodo"
            value={newTodo}
            onChange={this.handleOnInputChange}
            placeholder=" Todo Item"
          />
          <button>Submit</button>
        </form>

        {this.showTodoArray()}
        <br />
        <div>
          <p className="errorMessage">{/* {this.state.errorMessage} */}</p>
        </div>
      </div>
    );
  }
}

export default App;

//* 1. after a successful submit the input should get cleared
//! 2. if the input is empty and a user tried to submit, it should show up an error message "Cannot submit an empty field"
//? HINT: adding a errorMessage in state would help greatly, also maybe a boolean if there's an error
//* 3. using css make the bullet points go away
//! 4. if value already exists please show an error message telling user "No duplicate!"
