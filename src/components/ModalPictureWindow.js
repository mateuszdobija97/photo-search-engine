import React from "react";
import Modal from "react-modal";

const ModalPictureWindow = ({ isPictureOpen, setIsPictureOpen, picture }) => {
  Modal.setAppElement("body");

  const { user, urls, alt_description } = picture;

  const isLocationIcon = user.location ? (
    <i className="map marker alternate users icon"></i>
  ) : null;

  return (
    <div onClick={() => setIsPictureOpen(false)}>
      <Modal isOpen={isPictureOpen} className="modal-window">
        <div onClick={() => setIsPictureOpen(false)}>
          <p className="author">{`${user.first_name} ${user.last_name}`}</p>
          <img src={urls.regular} alt={alt_description} />
          <p className="location">
            {isLocationIcon}
            {user.location}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPictureWindow;
