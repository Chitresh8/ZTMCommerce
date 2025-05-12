# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- Task -->
<!-- import { Component } from "react";

class MonstersRolodex extends Component {
  constructor() {
    super();
    this.state = {
      //   monster1: { name: "Linda" },
      //   monster2: { name: "Frank" },
      //   monster3: { name: "Jacky" },
      //   monster4: { name: "Gainda" },
      monsters: [
        /*{ name: "Linda",id:1 }, { name: "Frank",id:2 }, { name: "Jacky",id:3 },{ name: "Andrei",id:4 }*/
      ],
      // Procedure for search and reset the filter (Step 1) First we need to keep state that input as string and store it in useState
      searchField:'',
    };
    console.log("1");
  }

  componentDidMount() {
    console.log("3");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  render() {
    console.log("2");

    //Procdeure for search and reset the filter (Step 2) Filtered logic we need to move to the top of return and use the state to filter the monsters (aftwe includes we need to use the state for input)
    const filteredMonsters=this.state.monsters.filter((monster)=>{
      // return monster.name.toLowerCase().includes(e.target.value.toLowerCase());
      // or
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
      
    })
    return (
      <>
        <div className="card">
          {/* <h1>{this.state.monster1}</h1>
          <h1>{this.state.monster2}</h1>
          <h1>{this.state.monster3}</h1> */}
          <input
            type="search"
            className="search-box"
            placeholder="Search Monsters"
            onChange={(e) => {
              // this.state(e.target.value);
              //Procedure for search and reset the filter (Step 3) We need to update the state with the new value of the input
              const searchField=e.target.value.toLocaleLowerCase();
//Procdeure for search and reset the filter (Step 4)  We need to set the state when we clear the input field the original data has to render
                this.setState(()=>{
                  return {searchField}
                })             
            }}
          />
          {/* Procedure for search and reset the filter (Step 5) We need to use the filtered logic name which we wrote on the filter function to map the data*/}
          {filteredMonsters.map((el) => {
            return <h1 key={el.id}>{el.name}</h1>;
          })}
        </div>
      </>
    );
  }
}

export default MonstersRolodex; -->
