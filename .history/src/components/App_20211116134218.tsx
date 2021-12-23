import React, { createContext, useState } from "react";
import Nav from "./Nav";
import Seathbox from "./Searthbox";
import Pagination from "./PageNation";

export const MovieContext = createContext<any>([]);
export const SerchContext = createContext<any>("");
export const TotalContext = createContext<any>(0);
export const CurrentContext = createContext<any>(1);

interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}

const App: React.FC<Props> = (props) => {
  const [movies, setMovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<any>("");
  const [totalResulte, setTotal] = useState<any>(0);
  const [currentPage, setCurrent] = useState<any>(1);

  const handlePaginate = (page: number) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${page}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;
        const newCurrent = page;
        setMovies(newResult);
        setCurrent(newCurrent);
      });
  };

  return (
    <div className="App">
      <MovieContext.Provider value={movies}>
        <SerchContext.Provider value={searchTerm}>
          <TotalContext.Provider value={totalResulte}>
            <CurrentContext.Provider value={currentPage}>
              <Nav />
              <Seathbox />
              <Pagination
                sum={100}
                per={10}
                onChange={(e: any) => handlePaginate(e.page)}
              />
            </CurrentContext.Provider>
          </TotalContext.Provider>
        </SerchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
};

export default App;
