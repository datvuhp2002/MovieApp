import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import UseAxios from "../../../../request/UseAxios";
import requests from "../../../../request";
import { Poster } from "../../../../request";
import Button from "../Button";
import "./slide.scss";
import { useEffect } from "react";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const Trending = UseAxios(requests.fetchUpcomming);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {Trending.map((item, index) => {
        if (index < 5) {
          return (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 h-100"
                src={`${Poster}${item.backdrop_path}`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>{item.title || item.name}</h1>
                <p>{item.overview}</p>
                <Button
                  className="mt-2"
                  leftIcon={<FontAwesomeIcon icon={faFilm} />}
                  to={`/Detail/${item.media_type || "movie"}/${item.id}`}
                  trailer
                >
                  Detail
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        }
      })}
    </Carousel>
  );
}

export default Slide;
