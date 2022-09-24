import styles from "./DetailMovie.module.scss";
import classNames from "classnames/bind";
import Image from "../Image";
import { Poster, Poster_W500, Poster_W342 } from "../../../../request";
import { Row, Col } from "react-bootstrap";
import moment from "moment/moment";
const cx = classNames.bind(styles);
export default function DetailMovie(data) {
  const dataMovie = data.data;
  const posterImg = `${Poster_W342}${dataMovie.poster_path}`;
  const getTime = (time) => {
    console.log(time);
    let MovieTime = "";
    {
      time % 60 == 0
        ? (MovieTime = `${time / 60} hours`)
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
        <h2>
          {dataMovie.tagline}{" "}
          <span>
            (
            {moment(dataMovie.release_date).format("YYYY") ||
              moment(dataMovie.first_air_date).format("YYYY")}
            )
          </span>
        </h2>
        <div className={cx("facts")}>
          {dataMovie.genres &&
            dataMovie.genres.map((item, index) => (
              <a href="#" key={index}>
                {index != dataMovie.genres.length - 1
                  ? `${item.name},`
                  : `${item.name}`}
              </a>
            ))}
          <div className={cx("runTime")}>
            {(dataMovie.runtime && getTime(dataMovie.runtime)) ||
              (dataMovie.episode_run_time &&
                getTime(dataMovie.episode_run_time))}
          </div>
        </div>
      </Col>
    </Row>
  );
}
