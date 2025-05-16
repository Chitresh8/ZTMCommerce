import React, { useEffect, useState } from "react";
import "./monstersRolodexFCA.css";
import SearchBoxFC from "./search-box-FC/Search-boxFComponent";
import CardListFC from "./card-list-FC/card-listFComponent";

const MonstersRolodexFunctionalComponentApplication = () => {
  const [monsters, setMonsters] = useState([]);
  const [monsterInput, setMonsterInput] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    const monsterData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setMonsters(data);
      setFilteredMonsters(data);
    };
    monsterData();
  }, []);

  const inputTypeHandler = (e) => {
    const searchMonsterString = e.target.value.toLowerCase();
    setMonsterInput(searchMonsterString);

    let filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonsterString)
    );
    setFilteredMonsters(filteredMonsters);
  };

  return (
    <div>
      <h1 className="app-title">Monsters Rolodex</h1>
      {/* <input
        type="search"
        placeholder="search monsters"
        onChange={inputTypeHandler}
        value={monsterInput}
      /> */}
      {/* {filteredMonsters.map((monster, id) => {
        return (
          <div key={monster.id}>
            <img
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
              alt="name"
            />
            <h3>{monster.name}</h3>
            <p>{monster.email}</p>
          </div>
        );
      })} */}
      <SearchBoxFC onChangeHandler={inputTypeHandler} placeholder="Search Monsters" className='monsters-search-box'/>
      <CardListFC key={monsterProp.id} monsterProp={filteredMonsters}/>
    </div>
  );
};
export default MonstersRolodexFunctionalComponentApplication;



//Another method of the code without taking the another array of useState to store the filteredMonsters ==> Author code

// import React, { useEffect, useState } from "react";
// import "./monstersRolodexFCA.css";
// import SearchBoxFC from "./search-box-FC/Search-boxFComponent";
// import CardListFC from "./card-list-FC/card-listFComponent";

// const MonstersRolodexFunctionalComponentApplication = () => {
//     const [searchField, setSearchField] = useState('');
//     const [monsters, setMonsters] = useState([]);
//     const [filteredMonsters, setFilterMonsters] = useState(monsters);
  
//     useEffect(() => {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((users) => setMonsters(users));
//     }, []);
  
//     useEffect(() => {
//       const newFilteredMonsters = monsters.filter((monster) => {
//         return monster.name.toLocaleLowerCase().includes(searchField);
//       });
  
//       setFilterMonsters(newFilteredMonsters);
//     }, [monsters, searchField]);
  
//     const onSearchChange = (event) => {
//       const searchFieldString = event.target.value.toLocaleLowerCase();
//       setSearchField(searchFieldString);
//     };
  
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
  
//         <SearchBoxFC
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <CardListFC monsters={filteredMonsters} />
//       </div>
//     );
// };
// export default MonstersRolodexFunctionalComponentApplication;
