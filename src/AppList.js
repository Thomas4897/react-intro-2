import React, { Component } from "react";
import "./App.css";

export class AppList extends Component {
  state = {
    list: [
      {
        id: 1,
        item: "tabo",
      },
      {
        id: 2,
        item: "paper towel",
      },
      {
        id: 3,
        item: "dish soap",
      },
    ],
  };

  showItemList = () => {
    return (
      <ul>
        {this.state.list.map(({ item, id }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>We're going to MAP data!</p>

        {/* List Versions */}
        {/* Different Return Examples */}
        <ul>
          {/* Without deconstrutor */}
          <h3>Without deconstrutor</h3>
          {this.state.list.map((element) => {
            return <li key={element.id}> {element.item} </li>;
          })}
          <br />
          <h3>With deconstrutor</h3>
          {/* With deconstrutor */}
          {this.state.list.map(({ item, id }) => {
            return <li key={id}> {item} </li>;
          })}

          {/* Implicit return */}
          <br />
          <h3>Implicit return</h3>
          {this.state.list.map(({ item, id }) => (
            <li key={id}>{item}</li>
          ))}
        </ul>

        {/* Function return */}
        <br />
        <h3>Function return</h3>
        {this.showItemList()}
      </div>
    );
  }
}

export default AppList;
