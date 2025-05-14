import React, { useCallback, useState } from "react";

export const TodoList = () => {
  const [input, setInput] = useState("");
  const [inputData, setInputData] = useState([]);

  const inputTypeHandler = useCallback((event) => {
    setInput(event.target.value);
  }, []);
  const inputSaveHandler = useCallback(() => {
    if (!input) return;
    setInputData([...inputData, input]);
    setInput("");
  }, [input]);
  const updateClickHandler = useCallback(() => {}, []);
  // const deleteClickHandler = useCallback((_,i) => {
  //   setInputData(inputData.filter((_,index)=>index!==i));
  // }, []);

  const deleteClickHandler=(i)=>{
   const delData=[...inputData];
   delData.splice(i,1);
   setInputData(delData);
  };

  return (
    <>
      <h3>To-Do-List</h3>
      <p>Daily tasks and it's status</p>
      <input
        type="text"
        placeholder="Enter the Task"
        value={input}
        onChange={inputTypeHandler}
      />
      <button onClick={inputSaveHandler}>Enter</button>
      {inputData.map((el,index) => {
        return (
          <div key={el}>
            <p>{el}</p>
            <button onClick={updateClickHandler}>Update</button>
            <button onClick={()=>deleteClickHandler(index)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

