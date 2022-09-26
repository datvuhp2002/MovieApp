import React from "react";
import styles from "./TrailerCard.module.scss";
import classNames from "classnames/bind";
import Image from "../Image";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";
import "../../../GlobalStyles/modal.scss";
import { useState } from "react";
function MyVerticallyCenteredModal({ identify, keyURL, show, onHide }) {
  console.log(keyURL);
  return (
    <Modal
      show={show}
      onHide={onHide}
      animation={true}
      style={{ border: `0` }}
      centered
      dialogClassName="modalW trailerWrapper h-100"
      contentClassName="trailer"
    >
      <Modal.Header className="p-0 w-100 h-100" closeButton>
        <iframe
          width="100%"
          height="480px"
          src={`https://www.youtube.com/embed/${keyURL}?autoplay=1`}
        ></iframe>
        {/* <YouTube key={keyURL} id={identify} /> */}
      </Modal.Header>
    </Modal>
  );
}
const cx = classNames.bind(styles);
export default function TrailerCard({ VideoKey, id }) {
  const urlVideo = `https://www.youtube.com/watch?v=${VideoKey}`;
  const getImgVideo = (key) => {
    return `https://img.youtube.com/vi/${key}/mqdefault.jpg`;
  };
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className={cx("wrapper")} onClick={() => setModalShow(true)}>
        <div className={cx("image")}>
          <Image w100 src={getImgVideo(VideoKey)}></Image>
        </div>
      </div>

      <MyVerticallyCenteredModal
        identify={id}
        keyURL={VideoKey}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
