import React, { createContext, useState, useRef } from "react";
interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}
const pageNation: React.FC<Props> = (props) => {
  const firstRender = React.useRef(true);

  return <div></div>;
};

export default pageNation;
