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
import styles from "../Styles.css";

export const Detail = () => {
  let Movie = useContext(MovieContext);
  const [movies, setMovies] = useState(Movie[0]); //ピザの商品の配列
  console.log(Movie);
  const { item_id }: any = useParams();
  const getItem = Movie[0].find((movie: any) => movie.id === item_id * 1); //idごとのピザを選ぶ
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  console.log(getItem);

  return (
    <div>
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
