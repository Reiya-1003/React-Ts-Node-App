import React, { createContext, useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";
import {
  MovieContext,
  SerchContext,
  CurrentContext,
  TotalContext,
} from "./App";

export const Detail = () => {
  let Movie = useContext(MovieContext);
  const [movies, setMovies] = useState(Movie[0]); //ピザの商品の配列
  console.log(Movie);
  const { item_id }: any = useParams();
  const getItem = Movie[0].find((movie: any) => movie.id === item_id * 1); //idごとのピザを選ぶ
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  console.log(getItem);

  const back = { width: 100%,
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;}

  return (
    <div style={back}>
      詳細画面です
      <div>
        <img
          src={IMG_PATH + getItem.poster_path}
          alt="card image"
          style={{ width: 200, height: 360 }}
        ></img>
      </div>
      <div>{getItem.title}</div>
    </div>
  );
};

export default Detail;
