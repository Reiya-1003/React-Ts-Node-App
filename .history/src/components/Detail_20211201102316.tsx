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
import styles from "../Styles.module.css";
import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LinkM from "@mui/material/Link";
import { colors } from "@material-ui/core";
import { ADD_FAVO, FAVO_LIST } from "../querys/querys";
import { useMutation } from "@apollo/react-hooks";

export const Detail = () => {
  let Movie = useContext(MovieContext);
  const [movies, setMovies] = useState(Movie[0]); //ピザの商品の配列
  console.log(Movie);
  const { item_id }: any = useParams();
  const getItem = Movie[0].find((movie: any) => movie.id === item_id * 1); //idごとのピザを選ぶ
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う

  console.log(getItem);
  const [addFavo] = useMutation(ADD_FAVO, {
    refetchQueries: [{ query: FAVO_LIST }],
    awaitRefetchQueries: true,
  });
  const addFavolist = () => {
    addFavo({
      variables: {
        title: getItem.title,
        img: getItem.poster_path,
        movienumber: 123456,
      },
    });
    console.log("データベースに追加処理");
  };
  return (
    <div style={{ backgroundColor: "#222222" }} className="container">
      <h5 className={styles.title}>{getItem.title}</h5>
      <div className={styles.headimgbox}>
        {getItem.backdrop_path === null ? (
          <div className={styles.errorbackfot}>Nop Image</div>
        ) : (
          <img
            src={IMG_PATH + getItem.backdrop_path}
            alt="card image"
            className={styles.headimg}
          ></img>
        )}
      </div>
      　　　　
      <div className={styles.headlinebox}>
        <p className={styles.headline}>あらすじ</p>
      </div>
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col s3">
          {getItem.backdrop_path === null ? (
            <div className={styles.errorpostfot}>Nop Image</div>
          ) : (
            <img
              src={IMG_PATH + getItem.poster_path}
              className={styles.poster}
            ></img>
          )}
        </div>
        {getItem.overview === "" ? (
          <div className="col s9 white-text" style={{ lineHeight: "20" }}>
            Nop OverView
          </div>
        ) : (
          <div className="col s9 white-text">{getItem.overview}</div>
        )}
      </div>
      <Button variant="contained" onClick={addFavolist}>
        AddFavo
      </Button>
      <div>
        <span>
          <HomeOutlinedIcon color="error" />
        </span>

        <span>
          <LinkM href="http://localhost:3000/" color="error">
            Back
          </LinkM>
        </span>
      </div>
    </div>
  );
};

export default Detail;
