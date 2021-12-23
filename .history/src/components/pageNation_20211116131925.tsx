import React from "react";
interface Props {
  sum: number;
  per: number;
  onChange: (e: { page: number }) => void;
}
const pageNation: React.FC<Props> = (props) => {
  const firstRender = useRef(true);

  return <div></div>;
};

export default pageNation;
