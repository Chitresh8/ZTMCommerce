import { Component } from "react";
import "./App.css";
import MonstersRolodex from "./MonstersRolodexApplication/MonstersRolodex";

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
        <h1>Vite + React</h1>
        <div className="card">
          {/* <h1>
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
          <MonstersRolodex/>
        </div>
      </>
    );
  }
}

export default App;
