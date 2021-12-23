import React, { createContext, useState, useRef, useEffect } from "react";
interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}
const PageNation: React.FC<Props> = (props) => {
  const firstRender = useRef(true);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    props.onChange({ page: currentPage });
  }, [currentPage]);

  return <div></div>;
};

export default PageNation;
