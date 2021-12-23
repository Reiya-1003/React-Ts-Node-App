import React, { useContext, useState } from "react";
import { MovieContext, SerchContext } from "./App";

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleSubmit: React.FormEvent<HTMLFormElement>;
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const Searthbox = () => {
  let Movie = useContext(MovieContext);
  const Search = useContext(SerchContext);
  console.log(Movie);
  console.log(Search);
  const [movies, setMovies] = useState<any>({});
  const [searchTerm, setSearchterm] = useState<string>();
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;
        setMovies(newResult);
        console.log(movies);
        Movie.shift();
        Movie.push(movies);
      });
  };
  const handleChange = (e: string | any) => {
    const newSerch = e.target.value;
    setSearchterm(newSerch);
    console.log(searchTerm);
  };

  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                placeholder="Serch Movie"
                type="text"
                onChange={handleChange}
              />
            </div>
          </form>
        </section>
      </div>

      <div className="container">
        <div className="row">
          <div className="col s12">
            {Movie.length === 0 ? (
              <p>no deta</p>
            ) : (
              movies.map((list: any, i: any) => {
                return (
                  <div className="col s12 m12 l2">
                    <div className="card">
                      <div className="card-image waves-effect waves-block waves-light">
                        <img
                          src={IMG_PATH + list.poster_path}
                          alt="card image"
                          style={{ width: "100%", height: 360 }}
                        ></img>
                      </div>
                      <div className="card-content">
                        <p>
                          <a href="#">View Details</a>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searthbox;
