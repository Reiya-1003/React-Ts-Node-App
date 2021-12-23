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

  const totalPage: number = Math.ceil(props.sum / props.per);

  const handleBack = (): void => {
    if (currentPage === 1) {
      return;
    }

    setPage(currentPage - 1);
  };
  const handleForward = (): void => {
    if (currentPage === totalPage) {
      return;
    }

    setPage(currentPage + 1);
  };
  const handleMove = (page: number): void => {
    setPage(page);
  };

  return <div></div>;
};

export default PageNation;
