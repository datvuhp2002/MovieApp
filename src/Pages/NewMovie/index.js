import React from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import UpComming from "../../components/Layout/Movies/UpCommingMovie";
import { Row } from "react-bootstrap";
export default function NewMovie() {
  return (
    <DefaultLayout>
      <Body>
        <Row>
          <UpComming />
        </Row>
      </Body>
    </DefaultLayout>
  );
}
