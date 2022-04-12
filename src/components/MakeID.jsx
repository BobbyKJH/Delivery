import { useState } from "react";
import styles from "./MakeID.module.css";
import { Link } from "react-router-dom";

function MakeID() {
  // 아이디 입력
  const [id, setId] = useState("");
  // 비밀번호 확인
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  // 아이디 입력 함수
  const ID = (e) => {
    setId(e.target.value);
  };

  // 패스워드 입력 함수
  const PASSWORD = (e) => {
    setPassword(e.target.value);
  };

  // 패스워드 확인 함수
  const PASSWORDCHECK = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  // 약관동의 체크 함수
  const onChangeTerm = (e) => {
    setTermError(false);
    setTerm(e.target.checked);
  };

  // 회원가입 form 함수
  const Login = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({ id, password, passwordCheck, term });
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
        <div className={styles.window}>
          {/* 아이디 입력 */}
          <label className={styles.input}>아이디</label>
          <input
            type="text"
            value={id}
            onChange={ID}
            className={styles.login}
            placeholder="아이디를 입력하세요."
          />
        </div>
        <br />
        {/* 비밀번호 입력 */}
        <div className={styles.window}>
          <label className={styles.input}>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={PASSWORD}
            className={styles.login}
            placeholder="8자리 이상 입력하세요."
          />
        </div>
        <br />
        {/* 비밀번호 확인 */}
        <div className={styles.window}>
          <label className={styles.input}>비밀번호 확인</label>
          <input
            type="password"
            value={passwordCheck}
            onChange={PASSWORDCHECK}
            className={styles.login}
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
          {passwordError && (
            <div className={styles.agree}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        {/* 약관동의 */}
        <div className={styles.ok}>
          <br />
          <label>동의하시겠습니까?</label>
          <input type="checkbox" value={term} onChange={onChangeTerm} />
          {termError && <div>약관에 동의하셔야 합니다.</div>}
        </div>
        <button type="submit" className={styles.btn} onSubmit={Login}>
          회원가입
        </button>
      </form>
    </div>
  );
}

export default MakeID;
