import { useEffect, useState } from "react";
import styles from "./SelectMenu.module.css";

function SelectMenu() {
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMenus(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? null : (
        <div className={styles.MainBox}>
          {menus.map((menu) => (
            <div key={menu.id} className={styles.menu}>
              <img src={menu.medium_cover_image} alt={menu.title} />
              <p className={styles.MenuName}>{menu.title}</p>
              <p>{menu.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectMenu;
