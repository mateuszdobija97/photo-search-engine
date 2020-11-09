import React from "react";
import PictureCard from "./PictureCard";

const PicturesList = ({ pictures }) => {
  const renderedPictures = pictures.map((picture) => (
    <PictureCard key={picture.id} picture={picture} />
  ));

  const noImagesForDisplay = (
    <p className="results-empty-list">No images for display!</p>
  );

  return (
    <div className="pictures-list">
      {pictures.length ? renderedPictures : noImagesForDisplay}
    </div>
  );
};

export default PicturesList;
