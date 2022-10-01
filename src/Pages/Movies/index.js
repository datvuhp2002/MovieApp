import React from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import TypeOfMovie from "../../components/Layout/components/TypeOfMovie";
export default function Movies() {
  return (
    <DefaultLayout>
      <Body>
        <TypeOfMovie />
      </Body>
    </DefaultLayout>
  );
}
