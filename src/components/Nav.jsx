import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.main}>
      <Link to="/" className={styles.title}>
        <img
          src="https://blog.kakaocdn.net/dn/ctocdN/btqBAWoc5kx/SUn5JU5g0QIp6WEmm5A541/img.jpg"
          className={styles.titleimg}
        />
      </Link>
      <div className={styles.contentbox}>
        <Link to="/loginpage" className={styles.content}>
          <strong className={styles.link}>로그인</strong>
        </Link>
        <Link to="/mylistpage" className={styles.content}>
          <strong className={styles.link}>My 배민</strong>
        </Link>
      </div>
      <hr />
    </div>
  );
}
export default Nav;
