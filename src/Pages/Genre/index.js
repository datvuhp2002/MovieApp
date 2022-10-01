import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { requestMoviesType } from "../../request";
import { Row } from "react-bootstrap";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import GenreItemList from "../../components/Layout/Movies/GenreItemList";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
export default function Genre() {
  const { type, genre, name } = useParams();
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  let [data, SetData] = useState([]);
  let [currentPage, setCurrentPage] = useState("1");
  let result = requestMoviesType(type, genre, currentPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    navigate(`${location.pathname}?page=${event.selected + 1}`);
  };
  useEffect(() => {
    result = requestMoviesType(type, genre, currentPage);

    axios
      .get(result)
      .then((res) => {
        SetData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);
  return (
    <DefaultLayout>
      <Body>
        <h1 className="fs-1 mb-5">{name} Movies</h1>
        <Row>
          <GenreItemList data={data} />
        </Row>
        <ReactPaginate
          previousLabel="previous"
          breakLabel="..."
          nextLabel="next"
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
      </Body>
    </DefaultLayout>
  );
}
