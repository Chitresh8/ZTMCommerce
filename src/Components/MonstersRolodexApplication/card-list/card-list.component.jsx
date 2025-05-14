import { Component } from "react";

class CardList extends Component {
  render() {
    // console.log(this.props);
    console.log('render')

    const { monsters } = this.props;
    return (
      <div>
        <h1>Here it is the Card List component</h1>
        {monsters.map((el) => {
          return <p key={el.id}>{el.name}</p>;
        })}
      </div>
    );
  }
}
export default CardList;
