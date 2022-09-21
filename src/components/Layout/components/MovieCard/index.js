import { useState } from "react";
import Image from "../Image";
import classNames from "classnames/bind";
import styles from "./MovieCard.module.scss";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const cx = classNames.bind(styles);
const getPosterURL = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
};
export default function MovieCard({
  topRate = false,
  poster_path,
  title,
  name,
  popularity,
  vote_average,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log("abc");
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Col
        xxl={2}
        xl={2}
        lg={3}
        md={4}
        sm={6}
        xs={6}
        className={cx("wrapper", "mb-5")}
        onClick={handleShow}
      >
        <div className={cx("image")}>
          <Image className="w100" src={getPosterURL(poster_path)}></Image>
        </div>
        <h3 className={cx("movie")}>
          <a href="">{title || name}</a>
        </h3>
        {topRate ? (
          <h3 className={cx("vote")}>
            <a href="#">Vote average: {vote_average}</a>
          </h3>
        ) : (
          <h3 className={cx("date")}>
            <a href="#">Popularity: {popularity}</a>
          </h3>
        )}
      </Col>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Image className="w100" src={getPosterURL(poster_path)}></Image>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
