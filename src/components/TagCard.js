import React from "react";

const TagCard = ({ tagName }) => {
  return (
    <div className="tagcard-container">
      <p>{tagName}</p>
    </div>
  );
};

export default TagCard;
