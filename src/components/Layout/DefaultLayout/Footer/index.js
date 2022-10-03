import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "../../components";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";
const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <Container fuild="md">
        <h3 className={cx("title")}>
          How is Movie With Me online high-quality <a href="/MovieApp">movie</a>{" "}
          different from other movie sites?
        </h3>
        <ul className={cx("list")}>
          <li>
            As a bluray (reencoded) movie, the lowest resolution is Full HD
            (1080p), while most other movie sites only have up to HD resolution
            (720p) is the highest.
          </li>
          <li>
            High quality, the amount of data per second (bitrate) is 5 - 10
            times higher than regular online movies - this is the determining
            factor of the sharpness of the movie (even more important than the
            resolution)
          </li>
          <li>
            5.1 sound (6 channels) instead of stereo (2 channels) like other
            movie sites (including Youtube)
          </li>
          <li>
            Suitable for viewing on high resolution TV, computer, and laptop
            screens
          </li>
          <li>
            If you are not satisfied with the available subtitles, you can
            upload your own subtitles to watch online
          </li>
          <li>
            There is an option to display bilingual subtitles (both English and
            Vietnamese are displayed at the same time), suitable for those who
            want to learn English through movie subtitles
          </li>
        </ul>
        <Row className={cx("contact")}>
          <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={12}>
            <Button
              className="w-100 mb-4"
              contact
              href="mailto:datvuhp2002@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Button>
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={12}>
            <Button
              className="w-100 mb-4"
              contact
              href="https://www.facebook.com/Xemphim.Original"
            >
              <FontAwesomeIcon
                icon={(fab, faFacebookF)}
                style={{ fontSize: "20px" }}
              />
            </Button>
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={12}>
            <Button
              className="w-100 mb-4"
              contact
              href="https://t.me/xemphim_official"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
