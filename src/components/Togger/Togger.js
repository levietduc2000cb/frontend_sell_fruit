import styles from "./Togger.module.css";
import classNames from "classnames/bind";
import { BsTelephoneFill } from "react-icons/bs";

function Togger() {
  let cx = classNames.bind(styles);
  return (
    <div className={cx("togger_wrapper")}>
      <a href="https://www.facebook.com/HalonaPlazaZuni">Chat Facebook</a>
      <a href="tel:0328069233">
        0986.989.626
        <div className={cx("togger_icon")}>
          <BsTelephoneFill />
        </div>
      </a>
    </div>
  );
}

export default Togger;
