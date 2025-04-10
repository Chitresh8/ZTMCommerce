import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Zihua",
      company:'ZTM'
    };
  }

  render() {
    return (
      <>
        <h1>Vite + React</h1>
        <div className="card">
          <h1>Hello, my name is {this.state.name}, I work at {this.state.company}</h1>
          <button onClick={()=>{this.setState({name:'Andrei'})}}>Change Name</button>
        </div>
      </>
    );
  }
}

export default App;
