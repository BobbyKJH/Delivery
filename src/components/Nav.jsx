import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.main}>
      <Link to="/" className={styles.title}>
        배달의 민족
      </Link>

      <Link to="/loginpage" className={styles.content}>
        로그인
      </Link>
      <Link to="/mylistpage" className={styles.content}>
        My 배민
      </Link>
    </div>
  );
}
export default Nav;
