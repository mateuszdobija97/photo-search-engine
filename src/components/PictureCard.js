import React, { useState, useEffect, useRef } from "react";
import TagCard from "./TagCard";
import ModalPictureWindow from "./ModalPictureWindow";

const PictureCard = ({ picture }) => {
  const [spans, setSpans] = useState(0);
  const [isPictureOpen, setIsPictureOpen] = useState(false);
  const refImg = useRef();
  const refDivTags = useRef();

  useEffect(() => {
    refImg.current.addEventListener("load", howManySpans);
  }, []);

  const howManySpans = () => {
    const height =
      refImg.current.clientHeight + refDivTags.current.clientHeight;

    const spans = Math.ceil(height / 10 + 3);

    setSpans(spans);
  };

  const { urls, alt_description } = picture;

  const renderedTags = picture.tags.map((tag, index) => {
    if (tag.source) return <TagCard key={index} tagName={tag.source.title} />;
    return null;
  });

  const modalWindow = isPictureOpen ? (
    <ModalPictureWindow
      isPictureOpen={isPictureOpen}
      picture={picture}
      setIsPictureOpen={setIsPictureOpen}
    />
  ) : null;

  return (
    <div
      className="picturecard-container"
      style={{ gridRowEnd: `span ${spans}` }}
    >
      <img
        onClick={() => setIsPictureOpen(true)}
        ref={refImg}
        src={urls.regular}
        alt={alt_description}
      />
      {modalWindow}
      <div ref={refDivTags} className="tags-container">
        {renderedTags}
      </div>
    </div>
  );
};

export default PictureCard;
