import { Component } from "react";
import "./App.css";
import MonstersRolodex from "./Components/MonstersRolodexApplication/MonstersRolodex";
import { TodoList } from "./Components/TodoList/TodoList";
import WeatherApi from "./Components/WeatherApi/WeatherApi";
import { MoviesApp } from "./Components/MoviesApp/MoviesApp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Zihua", lastName: "Zhang" },
      company: "ZTM",
    };
  }

  render() {
    return (
      <>
      <marquee>React + Vite</marquee>
        <div className="card">
          <h1>
            Hello, My Name is {this.state.name.firstName}{" "}
            {this.state.name.lastName}, I work at {this.state.company}.
          </h1>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: { firstName: "Andrei", lastName: "Neaogie" } };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
          <MonstersRolodex/>
          {/* <TodoList/> */}
          {/* <WeatherApi/> */}
          <MoviesApp/>
        </div>
      </>
    );
  }
}

export default App;
