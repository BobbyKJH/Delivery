import { Link } from "react-router-dom";
import styles from "./MainMenu.module.css";
import dummy from "../JSON/MainMenu.json";

function MainMenu() {
  return (
    <div className={styles.mainbox}>
      {dummy.map((menu) => (
        <Link to={menu.Link} className={styles.menu} key={menu.id}>
          <img src={menu.url} className={styles.img} />
          <p className={styles.MenuName}>{menu.name}</p>
        </Link>
      ))}
    </div>
  );
}
export default MainMenu;
