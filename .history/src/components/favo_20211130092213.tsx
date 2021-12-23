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
  console.log(data);

  const [firstList, setFirstList] = useState<any>([]); //とりあえずmongoにあるひとつのidで出す
  const [favodata, setFavodata] = useState<any>();
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  let Movie: any = [];

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${data.favos[0].movieId}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
    )
      .then((response) => {
        return response.json();
      })
      .then((firstdata) => {
        console.log(firstdata);
        //取得したJSONデータの処理
        const newFirstlist = firstdata.results;
        setFirstList(newFirstlist);
        console.log(firstList);
      })
      .catch((error) => {
        //エラー発生時の処理
        console.log("error");
      });
  }, []); //最初に出てくる映画のリスト（時期によって変わる）
  if (loading) {
    console.log(data);
    return <p>loding...</p>;
  } else if (error) {
    console.log(data);
    return <p>Error...</p>;
  } else {
    return (
      <>
        <div>
          <div className="row" style={{ margin: "0" }}>
            <div
              className="col s12"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              <div className="col s12 m6 l3">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      // src={IMG_PATH + }
                      alt="card image"
                      style={{ width: "100%", height: 555 }}
                    ></img>
                  </div>
                </div>
                <div>{data.favos[0].title}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Favo;
