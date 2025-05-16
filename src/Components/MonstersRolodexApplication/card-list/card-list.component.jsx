import { Component } from "react";
import './card-list.styles.css';
import Card from "../card-component/card.component";

class CardList extends Component {
  render() {
    // console.log(this.props);
    console.log("render");

    const { monsters } = this.props;
    //If we didn't destructure as above, then we have to use this.props.monsters everywhere instead of monsters
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <Card monsterProp={monster}/>  
            </div>
                      
          );
        })}
      </div>
    );
  }
}
export default CardList;
