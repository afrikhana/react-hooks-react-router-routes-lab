import React from "react";
import { directors } from "../data";

function Directors() {
  const Director=directors.map((directors)=>{
         return(
          <div>
            <h1>Directors Page</h1>
            <div>
              <h2>{directors.name}</h2>
              <ul>{directors.movies}</ul>
            </div>
          </div>
         );
  })
  return <div>{Director}</div>;
}

export default Directors;
