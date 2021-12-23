import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FAVO_LIST } from "../querys/querys";

const Favo = () => {
  const { loading, error, data } = useQuery(FAVO_LIST);
  console.log(FAVO_LIST);
  console.log(data.favos);

  const [favoList, setFavoList] = useState<any>(); //とりあえずmongoにあるひとつのidで出す
  const [favodata, setFavodata] = useState<any>([]);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  let Movie: any = [];

  useEffect(() => {
    data.favos.map((value: any, i: any) => {
      setFavoList(value.movieId);
      console.log(favoList);

      fetch(
        `https://api.themoviedb.org/3/movie/${favoList}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
      )
        .then((response) => {
          return response.json();
        })
        .then((firstdata) => {
          console.log(firstdata);
          //取得したJSONデータの処理
          const newFirstlist = firstdata;
          setFavodata(newFirstlist);
          Movie.push(newFirstlist);
          console.log(Movie);
        })
        .catch((error) => {
          //エラー発生時の処理
          console.log("error");
        });
    });
  }, [data.favos]);
  if (loading) {
    console.log(data);
    return <p>loding...</p>;
  } else if (error) {
    console.log(data);
    return <p>Error...</p>;
  } else {
    return (
      <>
        {Movie.map((list: any, i: any) => {
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
      </>
    );
  }
};

export default Favo;
