import React from "react";
import "./card-FComponent.css";

const CardFC = ({ monsterProp2 }) => {
  const { id, name, email } = monsterProp2;
  return (
    <>
      <div className="card-container" key={id}>
        <img
          alt={`monsterProp2 ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};
export default CardFC;
