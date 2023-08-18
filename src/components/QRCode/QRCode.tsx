import styles from "./QRCode.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const QRCode = () => {
  return (
    <div className={cx("qrcode__container")}>
      <div className={cx("qrcode__container__image")}>
        <img
          src="/images/image-qr-code.png"
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
