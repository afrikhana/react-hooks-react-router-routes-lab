import React from "react";
import { movies } from "../data";



function Movies() {
  const Lists= movies.map((movies)=>{
    return (
      <div>
        <div> <h1>Movies Page</h1>
            <h2>{movies.title}</h2>
          <p>{movies.time}</p>
          <ul>
            <li>{movies.genres}</li>
          </ul>
        </div>
      
      </div>
    );
  })
  return(
    <div>
        {Lists}
    </div>
       
  );
}

export default Movies;
