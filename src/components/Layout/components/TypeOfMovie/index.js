import React from "react";
import classNames from "classnames/bind";
import styles from "./TypeOfMovie.module.scss";
import { Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import Movie from "../../Movies/Movie";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { requestMoviesType } from "../../../../request";
import ReactPaginate from "react-paginate";
const cx = classNames.bind(styles);
export default function TypeOfMovie() {
  let Data = {
    FilmType: [
      { value: "movie", title: "Movies", selected: "selected" },
      { value: "tv", title: "Tv Series" },
    ],
    Category: [
      { value: "28", title: "Action" },
      { value: "12", title: "Adventure" },
      { value: "16", title: "Animation" },
      { value: "35", title: "Comedy" },
      { value: "80", title: "Crime" },
      { value: "18", title: "Drama" },
      { value: "99", title: "Documentaries" },
      { value: "10751", title: "Family" },
      { value: "14", title: "Fantasy" },
      { value: "36", title: "History" },
      { value: "27", title: "Horror" },
      { value: "10402", title: "Music" },
      { value: "9648", title: "Mystery" },
      { value: "10749", title: "Romance" },
      { value: "878", title: "Science Fiction" },
      { value: "53", title: "Thriller" },
      { value: "10752", title: "War" },
      { value: "37", title: "Western" },
    ],
  };
  let navigate = useNavigate();
  let [FilmType, setFilmType] = useState("movie");
  let [Category, setCategory] = useState("16");
  let [data, setData] = useState([]);
  let [currentPage, setCurrentPage] = useState("1");
  let sectionFilmType = useRef();
  let sectionCategory = useRef();
  const handleChangeCategory = () => {
    setCategory(sectionCategory.current.value);
  };
  const handleChangeFilmType = () => {
    setFilmType(sectionFilmType.current.value);
    setCurrentPage("1");
    navigate(`/Movies?page=1`);
  };
  let result = requestMoviesType(FilmType, Category, currentPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    navigate(`/Movies?page=${event.selected + 1}`);
  };
  // useEffect(() => {
  // }, [FilmType, Category, currentPage]);
  useEffect(() => {
    result = requestMoviesType(FilmType, Category, currentPage);
    axios
      .get(result)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data, currentPage]);
  return (
    <>
      <Row className={cx("wrapper")}>
        <Col
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          className={cx("wrapper_list")}
        >
          <label htmlFor="" className={cx("text")}>
            <strong>Film Type:</strong>
          </label>
          <select
            ref={sectionFilmType}
            className={cx("list_items")}
            aria-label="Default select example"
            onChange={handleChangeFilmType}
          >
            {Data.FilmType.map((item, index) => {
              return (
                <option value={item.value} key={index} {...item}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </Col>
        <Col
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={6}
          className={cx("wrapper_list")}
        >
          <label htmlFor="" className={cx("text")}>
            <strong>Category:</strong>
          </label>
          <select
            ref={sectionCategory}
            className={cx("list_items")}
            aria-label="Default select example"
            onChange={handleChangeCategory}
          >
            <option value="28" selected>
              - All -
            </option>
            {Data.Category.map((item, index) => {
              return (
                <option value={item.value} key={index}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </Col>
      </Row>
      {data.length === 0 && <h2>Sorry we don't have this movie</h2>}
      <Row>
        <Movie data={data} />
      </Row>
      {data.length !== 0 && (
        <ReactPaginate
          previousLabel={"previous"}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageCount={50}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          containerClassName={"pagination-lg pagination flex-wrap"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
        />
      )}
    </>
  );
}
