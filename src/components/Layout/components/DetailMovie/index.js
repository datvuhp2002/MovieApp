// import React from "react";
// import classNames from "classnames/bind";
// import styles from "./DetailMovie.module.scss";
// import { Container } from "react-bootstrap";
// import Image from "../Image";
// const cx = classNames.bind(styles);
// export default function DetailMovie() {
//   return (
//     <div className={cx("wrapper")}>
//       <div className="backdrop"></div>
//       <div className={cx("modal")}>
//         <Container fluid className="p-0">
//           <Image
//             src="https://image.tmdb.org/t/p/original/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
//             w100
//           />
//         </Container>
//       </div>
//       <div className="backdrop"></div>
//     </div>
//   );
// }
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function DetailMovie({ bollen }) {
  const [show, setShow] = useState(bollen);
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
