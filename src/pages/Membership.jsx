import styles from "./Membership.module.css";
import MakeID from "../components/MakeID";
import Nav from "../components/Nav";

function Membership() {
  return (
    <div>
      <Nav />
      <div className={styles.makeId}>
        <MakeID />
      </div>
    </div>
  );
}
export default Membership;
