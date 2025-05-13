import React,{useState} from "react";

export const MoviesApp = () => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const[error,setError]=useState('');

  const movieNameHandler=(event)=>{
    setMovieName(event.target.value);
    setError("");
  };

  const addMovieHandler=()=>{
    const trimmedName=movieName.trim();
    if(!trimmedName){
        setError("Movie Name cannot be empty");
        return;
    }

    const exists=movies.some((movie)=>movie.name.toLowerCase()===trimmedName.toLowerCase());

    if(exists){
        setError("Movie Name already exists...!")
        return;
    }
    setMovies([...movies,{name:trimmedName,watched:false}]);
    setMovieName("");
    setError("");
  };

//   const deleteMovieHandler=(i)=>{
//     setMovies(movies.filter((_,movieIndex)=>movieIndex!==movies));

//   };

const deleteMovieHandler=(i)=>{
    const movieIndexDelete=[...movies];
    movieIndexDelete.splice(i,1);
    setMovies(movieIndexDelete);
};

const toggleWatchHandler=(i)=>{
    let movieIndexToggle=[...movies];
    movieIndexToggle[i].watched=!movieIndexToggle[i].watched;
    setMovies(movieIndexToggle);
};

  return (
    <>
      <h3>🎬 Movies Watchlist App</h3>
      <input type='text' placeholder='Enter Movie Name' value={movieName} onChange={movieNameHandler}/>
      <button onClick={addMovieHandler}>Add to Watchlist</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <hr />
      {movies.map((movie,index)=>{
        return <div key={index} style={{marginBottom:'10px'}}>
          <h5>{movie.watched?<del>{movie.name}</del>:movie.name}</h5>
          <button onClick={()=>toggleWatchHandler(index)}>{movie.watched?"Unwatched":"Watched"}</button> 
          <button onClick={()=>deleteMovieHandler(index)}>Delete</button>
        </div>
      })}
    </>
  );
};