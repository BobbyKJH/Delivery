import Login from "../components/Login";
import Nav from "../components/Nav";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <>
      <Nav />
      <div className={styles.login}>
        <Login />
      </div>
    </>
  );
}
export default LoginPage;
