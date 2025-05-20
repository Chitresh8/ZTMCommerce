import { Component } from "react";
import "./App.css";
import MonstersRolodex from "./Components/MonstersRolodexApplication/MonstersRolodex";
import { TodoList } from "./Components/TodoList/TodoList";
import WeatherApi from "./Components/WeatherApi/WeatherApi";
import { MoviesApp } from "./Components/MoviesApp/MoviesApp";
import MonstersRolodexFunctionalComponentApplication from "./Components/MonstersRolodexFCA/MonstersRolodexFCA";
import GithubUserFinder from "./Components/GithubUserFinderApplication/Github components/GithubUserFinder";

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
        <div className="card">
          {/* <marquee>React + Vite</marquee>
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
          </button> */}
          <MonstersRolodex />
          {/* <TodoList/> */}
          {/* <WeatherApi/> */}
          {/* <MoviesApp/> */}
          <MonstersRolodexFunctionalComponentApplication />
          <GithubUserFinder />
        </div>
      </>
    );
  }
}

export default App;
