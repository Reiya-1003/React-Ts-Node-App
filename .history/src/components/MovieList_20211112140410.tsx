import React, { useContext, useState } from "react";
import { MovieContext, SerchContext } from "./App";

const MovieList = () => {
  const Movie = useContext(MovieContext);
  const Search = useContext(SerchContext);
  console.log(Movie);
  console.log(Search);
  const [movies, setMovies] = useState<any>(Movie);
  console.log(movies);
  const [searchTerm, setSearchterm] = useState<string>(Search);

  const lists = () => {
    if (Movie === []) {
      <p>no data</p>;
    } else {
      Movie[0].map((list: any, i: any) => <p key={i}>{list.title}</p>);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="col s12 m6 l3">
            {lists}
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
