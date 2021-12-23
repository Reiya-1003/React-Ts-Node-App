import React, { useContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FAVO_LIST, DELETE_FAVO } from "../querys/querys";

const Favo = () => {
  const { loading, error, data } = useQuery(FAVO_LIST);
  console.log(FAVO_LIST);
  console.log(data.favos);

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const [movies, setMovies] = useState<any>([]);
  console.log(movies);
  const [deleteFavo] = useMutation(DELETE_FAVO, {
    refetchQueries: [{ query: FAVO_LIST }],
    awaitRefetchQueries: true,
  });
  const handleDelete = (id: any) => {
    deleteFavo({ variables: { id } });
    console.log("デリートするよ");
  };
  // const duplicate =
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
              {data.favos.length === 0 ? (
                <div style={{ color: "white", paddingBottom: "2000px" }}>
                  Not Favolist
                </div>
              ) : (
                data.favos.map((list: any, i: any) => {
                  return (
                    <div className="col s12 m6 l3" key={i}>
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <Link to={`/detail/${list.movieId}`}>
                            <img
                              src={`${IMG_PATH}${list.img}`}
                              alt="card image"
                              style={{ width: "100%", height: 555 }}
                            ></img>
                          </Link>
                        </div>
                        <div className="card-action">
                          <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(list.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Favo;
