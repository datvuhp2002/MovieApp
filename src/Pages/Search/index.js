import React from "react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import Body from "../../components/Layout/DefaultLayout/Body";
import GetDataID from "../../request/GetDataID";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Row } from "react-bootstrap";
import { ResultsSearch } from "../../request";
import ResultMovieList from "../../components/Layout/Movies/ResultMovieList";
import { useEffect } from "react";
import axios from "axios";
const cx = classNames.bind(styles);
export default function Search() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([1]);
  const navigate = useNavigate();
  const ref = useRef();
  const handleChangeInput = () => {
    let keywords = ref.current.value;
    setInput(keywords);
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords}`)
      : navigate(`/search`);
  };
  useEffect(() => {
    let result = ResultsSearch(input);
    input.length > 0
      ? axios
          .get(result)
          .then((res) => {
            setSearchResults(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          })
      : (result = ResultsSearch([]));
  }, [input]);
  return (
    <DefaultLayout>
      <Body>
        <div className={cx("wrapperInput")}>
          <input
            className={cx("input")}
            ref={ref}
            type="text"
            name=""
            id=""
            value={input}
            placeholder="Enter your movie..."
            onChange={handleChangeInput}
          />
        </div>
        <Row className="mt-5">
          {searchResults.length > 0 ? (
            <ResultMovieList input={input} searchResults={searchResults} />
          ) : (
            <h2>Không có kết quả tìm kiếm của {input}</h2>
          )}
        </Row>
      </Body>
    </DefaultLayout>
  );
}
