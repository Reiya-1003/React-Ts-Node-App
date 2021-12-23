import React, { createContext, useState, useRef } from "react";
interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}
const PageNation: React.FC<Props> = (props) => {
  const firstRender = useRef(true);
  const [currentPage, setPage] = useState(1);
  return <div></div>;
};

export default PageNation;
