import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { fab, faFacebookF } from "@fortawesome/free-brands-svg-icons";
const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <Container fuild="md">
        <h3 className={cx("title")}>
          Phim chất lượng cao online của <a href="/">XemPhim</a> khác gì so với
          các trang phim khác?
        </h3>
        <ul className={cx("list")}>
          <li>
            Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD
            (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân
            giải HD (720p) là cao nhất
          </li>
          <li>
            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần
            phim online thông thường - đây là yếu tố quyết định độ nét của phim
            (thậm chí còn quan trọng hơn độ phân giải)
          </li>
          <li>
            Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang
            phim khác (kể cả Youtube)
          </li>
          <li>
            Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải
            cao
          </li>
          <li>
            Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề
            của riêng mình để xem online
          </li>
          <li>
            Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh
            &amp; tiếng Việt), phù hợp với những người muốn học tiếng Anh qua
            phụ đề phim
          </li>
        </ul>
        <div className={cx("contact")}>
          {/* <a
            rel="nofollow"
            class="layout_social__2PR5b"
            title="Liên hệ"
            href="/contact"
          ></a>
          <a
            href="https://fb.com/Xemphim.Original"
            target="_blank"
            class="layout_social__2PR5b"
            title="Facebook Page"
          ></a>
          <a
            href="https://t.me/xemphim_official"
            target="_blank"
            class="layout_social__2PR5b"
            title="Telegram Channel"
          ></a> */}
          <Button contact Link="./contact">
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
          <Button contact href="https://www.facebook.com/Xemphim.Original">
            <FontAwesomeIcon
              icon={(fab, faFacebookF)}
              style={{ fontSize: "20px" }}
            />
          </Button>
          <Button contact href="https://t.me/xemphim_official">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      </Container>
    </footer>
  );
}
