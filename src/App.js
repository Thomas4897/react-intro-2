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
    // isEmpty: false,
    isEmptyMessage: "Cannot submit an empty field",
    // isDuplicate: false,
    isDuplicateMessage: "No duplicate!",
    errorMessage: "",
  };

  handleOnInputChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  handleInputDuplicates = (event) => {
    this.state.todoArray.some(function (element) {
      return element.todo === event.target.newTodo.value;
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    const isDuplicate = this.state.todoArray.some(function (element) {
      return (
        element.todo.toLowerCase() === event.target.newTodo.value.toLowerCase()
      );
    });

    const isNotEmpty = event.target.newTodo.value.trim();

    //! .trim() removes any white space and returns
    //! false if its length is 0
    if (isNotEmpty) {
      if (isDuplicate) {
        this.setState({
          newTodo: "",
          errorMessage: "No duplicate!",
        });
      } else {
        let newArray = [
          ...this.state.todoArray,
          { id: uuidv4(), todo: this.state.newTodo },
        ];

        this.setState({
          todoArray: newArray,
          newTodo: "",
          errorMessage: "",
        });
      }
    } else {
      console.log("handleOnSubmit Error:");
      this.setState({
        newTodo: "",
        errorMessage: "Cannot submit an empty field",
      });
    }
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

  //! This will Render/Display the webpage
  render() {
    const { newTodo } = this.state;

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
          <p className="errorMessage">
            {this.state.errorMessage.length > 0 ? this.state.errorMessage : ""}
          </p>
        </div>
      </div>
    );
  }
}

export default App;

//* 1. after a successful submit the input should get cleared
//* 2. if the input is empty and a user tried to submit, it should show up an error message "Cannot submit an empty field"
//? HINT: adding a isEmptyMessage in state would help greatly, also maybe a boolean if there's an error
//* 3. using css make the bullet points go away
//! 4. if value already exists please show an error message telling user "No duplicate!"
