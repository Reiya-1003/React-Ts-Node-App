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
  const [pageLiks, setLinks]: any = useState([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const [pageIndex, setPageIndex] = useState(0);

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

        for (let i = 0; i < data.total_pages; i++) {
          console.log(i + 1 + "回目の処理です");
          pageLiks.push(i + 1);
          console.log(pageLiks);
        }

        console.log(data.total_pages);
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
      <ul className="pagination">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        {pageLiks.map((listNum: number, index: number) => {
          return (
            <li className="active">
              <a href="#!">{listNum}</a>
            </li>
          );
        })}

        <li className="active">
          <a href="#!">1</a>
        </li>
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Searthbox;
