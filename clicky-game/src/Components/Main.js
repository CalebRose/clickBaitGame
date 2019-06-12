import React from "react";
import CharCard from "./CharCard";
import CharData from "./CharData";

const MainContent = props => {
  const tileComponents = CharData.map(item => (
    <CharCard key={item.id} info={item} onClick={props.onClick} />
  ));
  return <div>{tileComponents}</div>;
};

export default MainContent;
