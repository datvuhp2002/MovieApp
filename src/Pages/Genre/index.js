import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { requestMoviesType } from "../../request";
import { Row } from "react-bootstrap";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import GenreItemList from "../../components/Layout/Movies/GenreItemList";
export default function Genre() {
  const { type, genre, name } = useParams();
  let [data, SetData] = useState([]);
  let result = requestMoviesType(type, genre);
  useEffect(() => {
    axios
      .get(result)
      .then((res) => {
        SetData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <DefaultLayout>
      <Body>
        <h1 className="fs-1 mb-5">{name} Movies</h1>
        <Row>
          <GenreItemList data={data} />
        </Row>
      </Body>
    </DefaultLayout>
  );
}
