import React from "react";
import CardFC from "../card-component-FC/card-FComponent";

const CardListFC = ({ monsterProp }) => {
  return (
    <>
      <div className="card-list" >
        {monsterProp.map((monster) => {
          return (
            <div key={monster.id}>
              <CardFC monsterProp2={monster} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardListFC;
