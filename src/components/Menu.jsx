import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Menu({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.box}>
      <img src={coverImg} alt={title} className={styles.img} />
      <h2 className={styles.title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.year}>{year}</h3>
      <p className={styles.summary}>
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
      <ul className={styles.category}>
        {genres.map((genre) => (
          <li className={styles.genre} key={genre}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
