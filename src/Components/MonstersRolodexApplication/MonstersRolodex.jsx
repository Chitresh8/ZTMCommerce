import { Component } from "react";
import CardList from "./card-list/card-list.component";

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
      searchField: "",
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

  onSearchChange=(e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }
  render() {
    console.log("2");
    const { monsters, searchField } = this.state;
    const {onSearchChange}=this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <>
        <div className="card">
          <input
            type="search"
            className="search-box"
            placeholder="Search Monsters"
            onChange={onSearchChange}
          />
          {filteredMonsters.map((el) => {
            return <h1 key={el.id}>{el.name}</h1>;
          })}
        </div>
        <CardList/>
      </>
    );
  }
}

export default MonstersRolodex;
