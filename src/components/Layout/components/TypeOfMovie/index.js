import React from "react";
import classNames from "classnames/bind";
import styles from "./TypeOfMovie.module.scss";
import { Row, Col } from "react-bootstrap";
const cx = classNames.bind(styles);
export default function TypeOfMovie() {
  return (
    <Row className={cx("wrapper")}>
      <Col
        xxl={2}
        xl={2}
        lg={4}
        md={6}
        sm={6}
        xs={6}
        className={cx("wrapper_list")}
      >
        <label htmlFor="" className={cx("text")}>
          <strong>Loại phim:</strong>
        </label>
        <select
          className={cx("list_items")}
          aria-label="Default select example"
        >
          <option value="" selected>
            - Tất cả -
          </option>
          <option value="phim-le">phim lẻ</option>
          <option value="phim-bo">Phim bộ</option>
        </select>
      </Col>
      <Col
        xxl={2}
        xl={2}
        lg={4}
        md={6}
        sm={6}
        xs={6}
        className={cx("wrapper_list")}
      >
        <label htmlFor="" className={cx("text")}>
          <strong>Thể loại:</strong>
        </label>
        <select
          className={cx("list_items")}
          aria-label="Default select example"
        >
          <option value="" selected>
            - Tất cả -
          </option>
          <option value="am-nhac">Âm nhạc</option>
          <option value="bi-an">Bí ẩn</option>
          <option value="chien-tranh">Chiến tranh</option>
          <option value="chien-tranh-chinh-tri">
            Chiến tranh &amp; Chính trị
          </option>
          <option value="chinh-kich">Chính kịch</option>
          <option value="gia-dinh">Gia đình</option>
          <option value="giat-gan">Giật gân</option>
          <option value="hai">Hài</option>
          <option value="hanh-dong">Hành động</option>
          <option value="hanh-dong-phieu-luu">Hành động &amp; Phiêu lưu</option>
          <option value="hoat-hinh">Hoạt hình</option>
          <option value="kinh-di">Kinh dị</option>
          <option value="ky-ao">Kỳ ảo</option>
          <option value="lang-man">Lãng mạn</option>
          <option value="lich-su">Lịch sử</option>
          <option value="noi-chuyen">Nói chuyện</option>
          <option value="phieu-luu">Phiêu lưu</option>
          <option value="phim-dai-ky">Phim dài kỳ</option>
          <option value="tai-lieu">Tài liệu</option>
          <option value="thuc-te">Thực tế</option>
          <option value="tin-tuc">Tin tức</option>
          <option value="toi-pham">Tội phạm</option>
          <option value="tre-em">Trẻ em</option>
          <option value="truyen-hinh">Truyền hình</option>
          <option value="vien-tay">Viễn Tây</option>
          <option value="vien-tuong">Viễn tưởng</option>
          <option value="vien-tuong-than-thoai">
            Viễn tưởng &amp; Thần thoại
          </option>
        </select>
      </Col>
      <Col
        xxl={2}
        xl={2}
        lg={4}
        md={6}
        sm={6}
        xs={6}
        className={cx("wrapper_list")}
      >
        <label htmlFor="" className={cx("text")}>
          <strong>Quốc gia:</strong>
        </label>
        <select
          className={cx("list_items")}
          aria-label="Default select example"
        >
          <option value="" selected>
            - Tất cả -
          </option>
          <option value="US">Mỹ</option>
          <option value="KR">Hàn Quốc</option>
          <option value="GB">Anh</option>
          <option value="FR">Pháp</option>
          <option value="CA">Canada</option>
          <option value="HK">Hồng Kông</option>
          <option value="JP">Nhật Bản</option>
          <option value="CN">Trung Quốc</option>
          <option value="TW">Đài Loan</option>
          <option value="IN">Ấn Độ</option>
          <option value="TH">Thái Lan</option>
          <option value="AU">Úc</option>
          <option value="VN">Việt Nam</option>
          <option value="DE">Đức</option>
          <option value="SE">Thụy Điển</option>
          <option value="IT">Ý</option>
          <option value="HU">Hungary</option>
          <option value="IE">Ai-len</option>
          <option value="MT">Malta</option>
          <option value="NZ">New Zealand</option>
          <option value="RU">Nga</option>
          <option value="IS">Iceland</option>
          <option value="FI">Phần Lan</option>
          <option value="MW">Ma-la-uy</option>
          <option value="CO">Colombia</option>
          <option value="DK">Đan Mạch</option>
          <option value="BE">Bỉ</option>
          <option value="ES">Tây Ban Nha</option>
          <option value="AR">Argentina</option>
          <option value="NL">Hà Lan</option>
          <option value="NO">Na Uy</option>
          <option value="SG">Singapore</option>
          <option value="PL">Ba Lan</option>
          <option value="MY">Malaysia</option>
          <option value="ID">Indonesia</option>
          <option value="IR">Iran</option>
          <option value="PR">Puerto Rico</option>
          <option value="NP">Nepal</option>
          <option value="BG">Bulgaria</option>
          <option value="KH">Campuchia</option>
          <option value="PH">Philippines</option>
          <option value="TR">Thổ Nhĩ Kỳ</option>
          <option value="MA">Morocco</option>
          <option value="BR">Brazil</option>
          <option value="MX">Mexico</option>
          <option value="CZ">Séc</option>
          <option value="RO">Rumani</option>
          <option value="PS">Palestine</option>
        </select>
      </Col>
      <Col
        xxl={2}
        xl={2}
        lg={4}
        md={6}
        sm={6}
        xs={6}
        className={cx("wrapper_list")}
      >
        <label htmlFor="" className={cx("text")}>
          <strong>Năm:</strong>
        </label>
        <select
          className={cx("list_items")}
          aria-label="Default select example"
        >
          <option value="" selected>
            - Tất cả -
          </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="-2012">Trước 2012</option>
        </select>
      </Col>
      <Col
        xxl={2}
        xl={2}
        lg={4}
        md={6}
        sm={6}
        xs={6}
        className={cx("wrapper_list")}
      >
        <label htmlFor="" className={cx("text")}>
          <strong>Thời lượng:</strong>
        </label>
        <select
          className={cx("list_items")}
          aria-label="Default select example"
        >
          <option value="" selected>
            - Tất cả -
          </option>
          <option value="0-60">Dưới 1 tiếng</option>
          <option value="60-90">1 - 1.5 tiếng</option>
          <option value="90-120">1.5 - 2 tiếng</option>
          <option value="120-150">2 - 2.5 tiếng</option>
          <option value="150-0">Trên 2.5 tiếng</option>
        </select>
      </Col>
      <Col
        xxl={2}
        xl={2}
        lg={4}
        md={6}
        sm={6}
        xs={6}
        className={cx("wrapper_list")}
      >
        <label htmlFor="" className={cx("text")}>
          <strong>Sắp xếp:</strong>
        </label>
        <select
          className={cx("list_items")}
          aria-label="Default select example"
        >
          <option value="updated">Ngày cập nhật</option>
          <option value="publishDate">Ngày phát hành</option>
          <option value="rating">Điểm đánh giá</option>
        </select>
      </Col>
    </Row>
  );
}
