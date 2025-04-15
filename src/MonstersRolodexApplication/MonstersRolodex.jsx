import { Component } from "react";

class MonstersRolodex extends Component {
  constructor() {
    super();
    this.state = {
      //   monster1: { name: "Linda" },
      //   monster2: { name: "Frank" },
      //   monster3: { name: "Jacky" },
      monsters: [/*{ name: "Linda",id:1 }, { name: "Frank",id:2 }, { name: "Jacky",id:3 },{ name: "Andrei",id:4 }*/],
    };
  }

  componentDidMount()
{
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then(users=>this.setState(()=>{return {monsters:users}},()=>{console.log(this.state)}))
}
  render() {
    return (
      <>
        <div className="card">
          {/* <h1>{this.state.monster1}</h1>
          <h1>{this.state.monster2}</h1>
          <h1>{this.state.monster3}</h1> */}
          {this.state.monsters.map((el) => {
            return <h1 key={el.id}>{el.name}</h1>;
          })}
        </div>
      </>
    );
  }
}

export default MonstersRolodex;
