import React, { useState } from "react";

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
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");

  const apiKey = process.env.REACT_APP_API;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/movie/${searchTerm}/movies?api_key=78eb03987f34d05d918381d81d8257fe&include_adult=false`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies({ movies: [...data.results] });
      });
  };
  const handleChange = (e: any) => {
    setSearchterm({ searchTerm: e.target.value });
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
    </div>
  );
};

export default Searthbox;
