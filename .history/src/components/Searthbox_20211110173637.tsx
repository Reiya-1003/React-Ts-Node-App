import React, { useState } from "react";

const Searthbox: React.FC = (props) => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");

  const apiKey = process.env.REACT_APP_API;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies({ movies: [...data.results] });
      });
  };
  const handleChange = (e: any) => {
    setSearchterm({ searchTerm: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form action="" onSubmit={handleSubmit()}>
            <div className="input-field">
              <input
                placeholder="Serch Movie"
                type="text"
                onChange={handleChange()}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Searthbox;
