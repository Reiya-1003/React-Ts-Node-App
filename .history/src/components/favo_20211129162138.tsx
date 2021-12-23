import React from "react";
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
                    alt="card image"
                    style={{ width: "100%", height: 555 }}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favo;
