import styles from "./DetailMovie.module.scss";
import classNames from "classnames/bind";
import Image from "../Image";
import { Poster, Poster_W500, Poster_W342 } from "../../../../request";
import { Row, Col } from "react-bootstrap";
import Button from "../Button";
import moment from "moment/moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import MovieCard from "../MovieCard";

const cx = classNames.bind(styles);
export default function DetailMovie(data) {
  const dataMovie = data.data;
  const posterImg = `${Poster_W342}${dataMovie.poster_path}`;
  const getTime = (time) => {
    console.log(time);
    let MovieTime = "";
    {
      time % 60 === 0
        ? (MovieTime = ` ${time / 60} hours`)
        : (MovieTime = `${(time - (time % 60)) / 60} hours ${
            time % 60
          } minutes`);
    }
    return MovieTime;
  };
  console.log(dataMovie.runtime);

  return (
    <Row className={cx("wrapper")}>
      <Col xxl={3} className="px-5 py-3">
        {dataMovie.poster_path && <Image w100 src={posterImg} />}
      </Col>
      <Col className={cx("main", "px-5 py-3")}>
        <h1>
          {dataMovie.title ||
            dataMovie.original_title ||
            dataMovie.original_name}
        </h1>
        <h2 className={cx("tagLine")}>
          {dataMovie.tagline || dataMovie.original_title}{" "}
          <span>
            (
            {moment(dataMovie.release_date).format("YYYY") ||
              moment(dataMovie.first_air_date).format("YYYY")}
            )
          </span>
        </h2>
        <div className={cx("runTime")}>
          <FontAwesomeIcon icon={faClock} className="me-2" />
          {(dataMovie.runtime && getTime(dataMovie.runtime)) ||
            (dataMovie.episode_run_time && getTime(dataMovie.episode_run_time))}
        </div>
        <div className={cx("information")}>
          <span className="me-2">Nation:</span>
          {dataMovie.production_countries &&
            dataMovie.production_countries.map((item, index) => (
              <p className="me-4" key={index}>
                {item.name}
              </p>
            ))}
        </div>
        <Row className={cx("facts")}>
          <Col className={cx("icon")}>
            <FontAwesomeIcon icon={faImdb} />
            <span>{dataMovie.vote_average}</span>
          </Col>
          <Col className={cx("movieType")}>
            {dataMovie.genres &&
              dataMovie.genres.map((item, index) => (
                <Button btnType key={index}>
                  {item.name}
                </Button>
              ))}
          </Col>
        </Row>
        <div className={cx("cast")}>
          <h2>Cast</h2>

          <Slider>
            <Image className="w-100 h-100" src={posterImg} />
          </Slider>
        </div>
      </Col>
    </Row>
  );
}
