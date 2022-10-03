import React from "react";
import Row from "react-bootstrap/Row";
import NetflixOriginals from "./NetflixOriginals";
import Trending from "./Trending";
import TopRated from "./TopRated";
export default function Movies() {
  return (
    <Row style={{ marginTop: "-4.5rem" }}>
      <Trending />
      <NetflixOriginals />
      <TopRated />
    </Row>
  );
}
