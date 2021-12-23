import React, { createContext, useState, useRef, useEffect } from "react";
interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}
export const PageNation: React.FC<Props> = (props) => {
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

  return (
    <div>
      {/* ページ番号が0（= アイテムが0個）のときは何も描画しない */}
      {totalPage !== 0 && (
        <>
          <span onClick={() => handleBack()}>＜</span>
          <ul>
            {[...Array(totalPage).keys()].map((page) => {
              page++;
              return page === currentPage ? (
                <li key={page} onClick={() => handleMove(page)}>
                  {page} active
                </li>
              ) : (
                <li key={page} onClick={() => handleMove(page)}>
                  {page}
                </li>
              );
            })}
          </ul>
          <span onClick={() => handleForward()}>＞</span>
        </>
      )}
    </div>
  );
};

export default PageNation;
