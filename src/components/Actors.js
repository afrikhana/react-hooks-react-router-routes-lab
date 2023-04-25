import React from "react";
import { actors } from "../data";

function Actors() {
  const Actors=actors.map((actors)=>{
    return(
      <div>
        <h1>Actors Page</h1>
        <div>{actors.name}
        <ul>{actors.movies}</ul>
        </div>
      
    </div>
    );
  })
  return <div>
{Actors}

  </div>;
}

export default Actors;
