import { useState } from "react";
import Image from "../Image";
import classNames from "classnames/bind";
import styles from "./MovieCard.module.scss";
import { Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import moment from "moment/moment";
import Badge from "react-bootstrap/Badge";
import Button from "../Button";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const getPosterURL = (poster_path) => {
  return `https://image.tmdb.org/t/p/w500/${poster_path}`;
};
const getBackDropURL = (backdrop_path) => {
  return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
};

export default function MovieCard({
  topRate = false,
  poster_path,
  backdrop_path,
  title,
  name,
  popularity,
  vote_average,
  overview,
  first_air_date,
  release_date,
  id,
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
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        style={{ border: `0` }}
        centered
        dialogClassName="modalW"
      >
        <Modal.Header
          className="p-0"
          // style={{ backgroundImage: `url(${getBackDropURL(backdrop_path)})` }}
        >
          <Image className="w100" src={getBackDropURL(backdrop_path)}></Image>
          <div></div>
        </Modal.Header>
        <Modal.Body className="rounded-bottom py-4">
          <div className="title">
            <h1>{title || name}</h1>
            <Button
              rightIcon={<FontAwesomeIcon icon={faPlay} />}
              trailer
              to={`./Detail/${id}`}
            >
              Watch Trailer
            </Button>
          </div>
          <div className="d-flex align-center mb-3 justify-content-between ">
            <div className="d-flex align-items-center">
              <p className="text-success fw-1 me-2">
                Vote average: {vote_average * 10}%
              </p>
              <div>
                <Badge pill bg="secondary">
                  {moment(release_date).format("YYYY") ||
                    moment(first_air_date).format("YYYY")}
                </Badge>
              </div>
            </div>
          </div>
          <p style={{ opacity: "0.7" }}>{overview}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
