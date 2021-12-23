import React, { useContext, useState, useEffect } from "react";
import {
  MovieContext,
  SerchContext,
  CurrentContext,
  TotalContext,
} from "./App";

import MuiPagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core/styles";

const Searthbox = ({ pageContext }: any) => {
  let Movie = useContext(MovieContext);
  const Search = useContext(SerchContext);

  const [movies, setMovies] = useState<any>({});
  const [firstList, setFirstList] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<string>();

  const [totlResult, setResult] = useState<any>(0);
  let [pageLinks, setLinks]: any = useState([]);

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const [pageIndex, setPageIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((firstdata) => {
        //取得したJSONデータの処理
        setFirstList(firstdata.results);
        console.log(firstdata.results);
        console.log(firstList);
      })
      .catch((error) => {
        //エラー発生時の処理
        console.log("error");
      });
  }, []);

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
        let newLinks = [];

        for (let i = 0; i < data.total_pages; i++) {
          newLinks.push(i + 1);
        }
        setLinks(newLinks);
        console.log(data.total_pages);
      });
  };
  const handleChange = (e: string | any) => {
    const newSerch = e.target.value;
    setSearchterm(newSerch);
    console.log(searchTerm);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    const newValue = value;
    setPage(newValue);
    console.log(newValue); //リアルタイムでページ番号
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${newValue}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
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
              <p>nodata</p>
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
                        <div className="card-content"></div>
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
        <MuiPagination
          count={pageLinks.length}
          page={page}
          variant="outlined"
          color="primary"
          onChange={handleChangePage}
        />
        <p>page::{page}</p>
      </div>
    </div>
  );
};

export default Searthbox;
