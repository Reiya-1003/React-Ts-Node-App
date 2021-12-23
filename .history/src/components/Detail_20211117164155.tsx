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
  const [pizzas, setPizzas] = useState(Movie[0]); //ピザの商品の配列
  console.log(Movie);
  const { item_id }: any = useParams();
  const getItem = pizzas.find((piza: any) => piza.id === item_id * 1); //idごとのピザを選ぶ
  console.log(getItem);

  return <div>詳細画面です</div>;
};

export default Detail;
