import React from "react";

var CharCard = props => {
  console.log(props.info.id);
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.info.name}
          src={props.info.img}
          id={props.info.id}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default CharCard;
