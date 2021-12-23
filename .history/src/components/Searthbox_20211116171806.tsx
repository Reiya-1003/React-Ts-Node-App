import React, { useContext, useState } from "react";
import {
  MovieContext,
  SerchContext,
  CurrentContext,
  TotalContext,
} from "./App";
import useSWR from "swr";

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

const fetcher = (url: any) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });

const Searthbox = () => {
  let Movie = useContext(MovieContext);
  const Search = useContext(SerchContext);
  let Current = useContext(CurrentContext);
  const Total = useContext(TotalContext);
  console.log(Movie);
  console.log(Search);
  const [movies, setMovies] = useState<any>({});
  const [searchTerm, setSearchterm] = useState<string>();
  const [currentPage, setCurrent] = useState<any>(1);
  const [totlResult, setResult] = useState<any>(0);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const [pageIndex, setPageIndex] = useState(0);

  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );
  console.log(data);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;
        const newTotal = data.total_results;
        setMovies(newResult);
        setResult(newResult);

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

  // const nextPage = (pageNumber: string | any) => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=2`
  //   )
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log(data);
  //       const newResult = data.results;
  //       const newCurrent = pageNumber;
  //       setMovies(newResult);
  //       setCurrent(newCurrent);
  //     });
  // };

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
                  <div className="col s12 m6 l3">
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
      <div>
        {data.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Searthbox;
