import styles from "./QRCode.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import PNG_QRCODE from "../../../public/image-qr-code.png";

export const QRCode = () => {
  return (
    <div className={cx("qrcode__container")}>
      <div className={cx("qrcode__container__image")}>
        <img
          src={PNG_QRCODE}
          alt="qr code image"
        />
      </div>
      <div className={cx("qrcode__container__header-text")}>Improve your front-end skills by building projects</div>
      <div className={cx("qrcode__container__text")}>
        Scan the QR code to visit Frontend <br /> Mentor and take your coding skills <br /> to the next level
      </div>
    </div>
  );
};
