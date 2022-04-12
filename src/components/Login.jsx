import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [num, setNum] = useState(0);

  const ID = (e) => {
    setId(e.target.value);
    console.log(id);
  };
  const PASSWORD = (e) => {
    setPassword(e.target.value);
  };

  const Login = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(password);
  };

  return (
    <div className={styles.main}>
      <Link to="/" className={styles.title}>
        <img
          src="https://blog.kakaocdn.net/dn/ctocdN/btqBAWoc5kx/SUn5JU5g0QIp6WEmm5A541/img.jpg"
          className={styles.titleimg}
        />
      </Link>
      <form onSubmit={Login}>
        <input
          type="text"
          value={id}
          onChange={ID}
          className={styles.login}
          placeholder="아이디를 입력하세요."
        />
        <input
          type="password"
          value={password}
          onChange={PASSWORD}
          className={styles.login}
          placeholder="패스워드를 입력하세요."
        />
        <button type="submit" className={styles.btn} onSubmit={Login}>
          로그인
        </button>
      </form>
      <br />
      <Link to="/membership" className={styles.make}>
        <p>회원가입</p>
      </Link>
    </div>
  );
}
export default Login;
