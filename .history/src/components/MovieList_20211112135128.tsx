import React, { useContext, useState } from "react";
import { MovieContext, SerchContext } from "./App";

const MovieList = () => {
  const Movie = useContext(MovieContext);
  const Search = useContext(SerchContext);
  console.log(Movie);
  console.log(Search);
  const [movies, setMovies] = useState<any>(Movie);
  const [searchTerm, setSearchterm] = useState<string>(Search);

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="col s12 m6 l3">
            {Movie.map((list: any, i) => (
              <p key={i}>{list.title}</p>
            ))}
            <div className="card">
              <div className="card-image waves-effect waves-block waveslight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
