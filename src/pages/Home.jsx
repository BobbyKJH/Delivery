import styles from "./Home.module.css";
import Api from "../components/Api";
import MainMenu from "../components/MainMenu";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />

      <div className={styles.menu}>
        <MainMenu />
      </div>

      <Api />
    </div>
  );
}
export default Home;
