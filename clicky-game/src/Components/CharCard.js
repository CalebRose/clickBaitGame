import React from "react";

var CharCard = props => {
  return (
    <div className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
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
