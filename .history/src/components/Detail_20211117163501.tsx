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
  console.log(Movie);
  const item_id = useParams();

  return <div>詳細画面です</div>;
};

export default Detail;
