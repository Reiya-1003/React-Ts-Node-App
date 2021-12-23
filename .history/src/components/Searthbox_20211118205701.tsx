import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import {
  MovieContext,
  SerchContext,
  CurrentContext,
  TotalContext,
} from "./App";

import MuiPagination from "@material-ui/lab/Pagination";
import { withStyles } from "@material-ui/core/styles";

const Searthbox = ({ pageContext }: any) => {
  let Movie = useContext(MovieContext); //映画のコンテキスト
  const Search = useContext(SerchContext); //検索ボックス用のコンテキスト
  const [movies, setMovies] = useState<any>({}); //検索したワードの映画の表示に使う
  const [firstList, setFirstList] = useState<any>([]); //最初にアクセスした画面の映画の表示
  const [searchTerm, setSearchterm] = useState<string>(); //検索ワードが入る

  let [pageLinks, setLinks]: any = useState([]); //検索結果の映画のトータルページを数える
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const [page, setPage] = useState(1); //ページの個数を保存するその数だけページングを作る

  let newListItem = [];

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((firstdata) => {
        //取得したJSONデータの処理
        const newFirstlist = firstdata.results;
        setFirstList(newFirstlist);
        console.log(firstdata.results);
        console.log(firstList);
        Movie.push(newFirstlist);
      })
      .catch((error) => {
        //エラー発生時の処理
        console.log("error");
      });
  }, []); //最初に出てくる映画のリスト（時期によって変わる）

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
        Movie.push(data.results);
        let newLinks = [];

        for (let i = 0; i < data.total_pages; i++) {
          newLinks.push(i + 1);
        }
        setLinks(newLinks);
        console.log(data.total_pages);
      });
  }; //検索するときのonSbmit

  const handleChange = (e: string | any) => {
    const newSerch = e.target.value;
    setSearchterm(newSerch);
    console.log(searchTerm);
  }; //入力した単語をserchTerm（検索ワード）にセットするonChange

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
        const newResult = data.results;

        Movie.shift();
        Movie.push(newResult);
        console.log(Movie[0]);
      });
  }; //ページ番号ごとの映画を表示するonChange

  return (
    <div>
      {/* 検索ボックス */}
      <div className="container">
        <div className="row">
          <section className="col s4 offset-s4">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  placeholder="Serch Movie"
                  type="text"
                  onChange={handleChange}
                  style={{ color: "white" }}
                />
              </div>
            </form>
          </section>
        </div>
      </div>
      {/* 映画の一覧（２０件分）  */}
      <div>
        <div className="row">
          <div
            className="col s12"
            style={{ marginTop: "30px", marginBottom: "30px" }}
          >
            {Movie.length === 0
              ? firstList.map((list: any, i: any) => {
                  return (
                    <div className="col s12 m6 l3" key={i}>
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <Link to={`/detail/${list.id}`}>
                            <img
                              src={IMG_PATH + list.poster_path}
                              alt="card image"
                              style={{ width: "100%", height: 555 }}
                            ></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              : Movie[0].map((list: any, i: any) => {
                  return (
                    <div className="col s12 m6 l3" key={i}>
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <Link to={`/detail/${list.id}`}>
                            <img
                              src={IMG_PATH + list.poster_path}
                              alt="card image"
                              style={{ width: "100%", height: 555 }}
                            ></img>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
      {/* ページネーション */}
      <div className="container black">
        {Movie.length === 0 ? (
          <p></p>
        ) : (
          <MuiPagination
            style={{ color: "black" }}
            count={pageLinks.length}
            page={page}
            variant="outlined"
            color="secondary"
            onChange={handleChangePage}
          />
        )}
      </div>
    </div>
  );
};

export default Searthbox;
