import { Component } from "react";
import "./card.component.css";
class Card extends Component {
  render() {
    const { id, name, email } = this.props.monsterProp;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;
