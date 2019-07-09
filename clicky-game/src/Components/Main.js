import React from "react";
import CharCard from "./CharCard";

const MainContent = props => {
  const tileComponents = props.tiles.map(item => (
    <CharCard key={item.id} info={item} onClick={props.onClick} />
  ));
  return <div className="container row cardDeck">{tileComponents}</div>;
};

export default MainContent;
